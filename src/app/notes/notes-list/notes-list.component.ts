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
  saved$ : any[];

  constructor(db: AngularFireDatabase) {
    var user = firebase.auth().currentUser;
    var uid;
    uid = user.uid;
    db.list('/users/'+uid+'/saved/'+uid).valueChanges().subscribe(list=> {
      this.saved$ = list;
      console.log(list);
   });
  }

  getInputVal(id){
    return (<HTMLInputElement>document.getElementById(id)).value;
  }
  
  update(){
    //Get Values
    var category1 =this.getInputVal('category1');
    var category2= this.getInputVal('category2');
    var category3 =this.getInputVal('category3');
    var category4= this.getInputVal('category4');
    var category5 =this.getInputVal('category5');
    var user = firebase.auth().currentUser;
    var uid;
    uid = user.uid;
    // this.updateF(category1, category2);
    var ref = firebase.database().ref('/users/'+uid+'/saved');
    ref.child(uid).update({
      category1: category1,
      category2: category2,
      category3: category3,
      category4: category4,
      category5: category5 
    });
    console.log(ref)
  }
}
