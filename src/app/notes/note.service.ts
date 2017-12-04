import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as firebase from 'firebase';

interface Note {
  content: string;
  hearts?: number;
  id?: any;
  time?: number;
}

@Injectable()
export class NoteService {

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;

  constructor(db: AngularFireDatabase) {
    this.size$ = new BehaviorSubject(null);
    this.items$ = this.size$.switchMap(Title =>
      db.list('/notes', ref =>
        Title ? ref.orderByChild('Title').equalTo(Title) : ref
      ).snapshotChanges()
    );
  }

}
