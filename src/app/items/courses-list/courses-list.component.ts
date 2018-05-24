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
    this.items$ = this.size$.switchMap(Category =>
      db.list('/rss', ref =>
        Category ? ref.orderByChild('Category').equalTo(Category) : ref
      ).snapshotChanges()
    );
  }

  filterBy(Category: string|null) {
    this.size$.next(Category);
  }

  startSpeaking() {
    this.waitCommand = false;
    this.courseList.forEach(elem => elem.nativeElement.style.border = null);

    Observable.of(...this.courseList.toArray())
      .concatMap(elem => {
        elem.nativeElement.style.border = '3px groove rgba(65, 109, 234, 0.5)';
        const title = elem.nativeElement.querySelector('h3').textContent;
        const description = elem.nativeElement.querySelector('p').textContent;
        return Observable.create(observer => {
          this.speech.speak(title)
            .subscribe(() => {
              observer.next();
              this.waitCommand = true;

              this.speech.record().timeout(7000).subscribe(
                event => {
                  const command = event.results[0][0].transcript;
                  this.waitCommand = false;
                  console.log('User may have said:', command);
                  if (command === 'more') {
                    this.speech.speak(description).subscribe(() => observer.complete() );
                  }
                  else if (command === 'stop') {
                    this.waitCommand = true;
                  }
                  else {
                    observer.complete();
                  }
                },
                error => {
                  this.waitCommand = false;
                  observer.complete();
                }
              )
            });
        });
      })
      .subscribe(() => this.waitCommand = false);
  }

}
