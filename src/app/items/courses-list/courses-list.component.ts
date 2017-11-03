import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../core/auth.service';
import * as _ from 'lodash';
import {Subject} from 'rxjs/Subject';


@Component({
  selector: 'app-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  coursesObservable;
  categorySubject = new Subject<any>();

  constructor(private db: AngularFireDatabase, public auth: AuthService) { }
  ngOnInit() {
    this.coursesObservable = this.categorySubject.map(category => {
      return this.db.list<any[]>('courses', ref  => {
        return ref.orderByChild('category')
          .equalTo(category))
          .valueChanges();
    });
}
    pickCategory (category: string) {
      this.categorySubject.next(category);
    }

}
