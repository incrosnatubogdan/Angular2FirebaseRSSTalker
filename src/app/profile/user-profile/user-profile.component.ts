import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseListObservable } from 'angularfire2/database-deprecated';
export class Item {
  body: string;
}

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  items: FirebaseListObservable<Item[]> = null;
  userId: string;

  constructor(public auth: AuthService, private db: AngularFireDatabase, ) {
    this.auth.authState.subscribe(user => {
      if (user) {this.userId = user.uid}
    })

  }
  getItemsList(): FirebaseListObservable<Item[]> {
    if (!this.userId) {return; }
    this.items = this.db.list(`items/${this.userId}`);
    return this.items
  }
  createItem(item: Item)  {
    this.items.push(item)
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

}
