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

  constructor(db: AngularFireDatabase, private speech: SpeechService) {
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

  speak(text: string) {
    this.speech.speak(text);
  }

  startSpeaking() {
    this.courseList.forEach(courseElem => {
      this.speak(courseElem.nativeElement.textContent);
    })
  }
}

