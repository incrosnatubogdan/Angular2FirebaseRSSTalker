import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';
import { SpeechService } from '../../shared/speech/speech.service';


@Component({
  selector: 'app-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  @ViewChildren('courseList') courseList: QueryList<any>;

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;
  waitCommand: boolean;

  constructor(db: AngularFireDatabase, private speech: SpeechService) {
    this.waitCommand = false;
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.switchMap(category =>
      db.list('/courses', ref =>
        category ? ref.orderByChild('category').equalTo(category) : ref
      ).snapshotChanges()
    );
  }

  filterBy(category: string|null) {
    this.size$.next(category);
  }

  startSpeaking() {
    this.waitCommand = false;
    this.courseList.forEach(elem => elem.nativeElement.style.border = null);

    Observable.of(...this.courseList.toArray())
      .concatMap(text => {
        text.nativeElement.style.border = '1px solid red';
        return this.speech.speak(text.nativeElement.textContent);
      })
      .subscribe(
        (next) => console.log('next'),
        (error) => console.log(error),
        () => {
          this.startRecording();
        }
      );
  }

  startRecording() {
    this.waitCommand = true;

    this.speech.record().subscribe(
      event => {
        const command = event.results[0][0].transcript;
        console.log(command);
        if (command === 'read more') {
          this.startSpeaking();
        } else {
          this.waitCommand = false;
        }
      },
      error => {
        console.log(error);
        if (error === 'no-speech') {
          this.startRecording();
        }
      },
      () => {
        this.waitCommand = false;
      }
    )
  }
}
