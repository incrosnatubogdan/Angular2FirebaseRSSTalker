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
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {
  @ViewChildren('courseList') courseList: QueryList<any>;

  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  size$: BehaviorSubject<string|null>;
  apps: string [];
  mArticles:Array<any>;
  mSources:Array<any>;
  saved$ : any[];
  uid: string;

  constructor(private db: AngularFireDatabase, private speech: SpeechService, private http: HttpClient, private newsapi:NewsApiService, private router: Router) {
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

  check:string = ''; //global variable
  waitCommand: boolean = false;

  getInputVal(id){
    return (<HTMLInputElement>document.getElementById(id)).value;
  }

  add() {
    var user = firebase.auth().currentUser;
    var uid;
    uid = user.uid;
    firebase.database().ref('/users/'+uid+'/saved').child(uid).push({
      uid: uid
    });
  }

  goToWatchlist() {
    this.router.navigate(['/notes']);
  }
  

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  filterBy(Category: string|null) {
    this.size$.next(Category);
  }

  stopSpeaking() {
    this.check = "test";
    console.log(this.check);
    this.waitCommand = true;
    this.courseList.forEach(elem => elem.nativeElement.style.border = null);
  }

  startSpeaking() {
    this.waitCommand = false;
    this.courseList.forEach(elem => elem.nativeElement.style.border = null);
    // this.check = "test1";
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
              if (this.check == "test") {
                this.waitCommand = true;
                this.check = "test2";
                return;
              }
              this.speech.record().timeout(7000).subscribe(
                event => {
                  const command = event.results[0][0].transcript;
                  this.waitCommand = false;
                  console.log('User may have said:', command);
                  console.log(this.check);
                  
                  console.log('User may have said:', command);
                  if (command === 'more') {
                    this.speech.speak(description).subscribe(() => observer.complete() );
                  } else if (command === 'stop' || command === 'stop stop' ) {
                    this.waitCommand = true;
                    this.courseList.forEach(elem => elem.nativeElement.style.border = null);
                  }  else {
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