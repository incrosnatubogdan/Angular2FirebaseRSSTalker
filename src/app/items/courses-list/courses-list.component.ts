import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AngularFireDatabase, AngularFireAction, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/concatMap'
import 'rxjs/add/operator/switchMap';
import * as firebase from 'firebase';
import { SpeechService } from '../../shared/speech/speech.service';
import 'rxjs/add/operator/timeout';
import { HttpClient } from '@angular/common/http';
import { NewsApiService } from '../../news-api.service';


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
  apps: string [];
  mArticles:Array<any>;
  mSources:Array<any>;
  saved$ : any[];
  uid: string;
  

  constructor(private db: AngularFireDatabase, private speech: SpeechService, private http: HttpClient, private newsapi:NewsApiService) {
    this.waitCommand = false;
    this.size$ = new BehaviorSubject(null);
    var user = firebase.auth().currentUser;
    var uid;
    uid = user.uid;

    this.items$ = this.size$.switchMap(Category =>
      db.list('/users/'+uid, ref => ref
      ).snapshotChanges()
    );
    
    db.list('/users/'+uid+'/saved/'+uid).valueChanges().subscribe(list=> {
      this.saved$ = list;
      console.log(list);
   });
  }
  ngOnInit () {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    
  }

  getInputVal(id){
    return (<HTMLInputElement>document.getElementById(id)).value;
  }

  fbkey:string = ''; //global variable

  goToDetails(saved:{},key:string) {
    this.fbkey = saved[key];  
    document.getElementById("uform").style.display = "block";
    console.log(this.uid);
  }

  add() {
    var user = firebase.auth().currentUser;
    var uid;
    uid = user.uid;
    firebase.database().ref('/users/'+uid+'/saved').child(uid).push({
      uid: uid
    });
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

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  filterBy(Category: string|null) {
    this.size$.next(Category);
  }

  stopSpeaking() {
    this.waitCommand = true;
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

export interface Item {
  name: string;
}