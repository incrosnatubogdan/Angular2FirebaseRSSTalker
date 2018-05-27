import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';

import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';

import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import * as firebase from 'firebase';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent{

  @ViewChildren('courseList') courseList: QueryList<any>;

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;


  constructor(db: AngularFireDatabase) {

    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.switchMap(Title =>
      db.list('/rss', ref =>
        Title ? ref.orderByChild('Title').equalTo('Google') : ref
      ).snapshotChanges()
    );
  }

  filterBy(Title: string|null) {
    this.size$.next(Title);
  }
}
