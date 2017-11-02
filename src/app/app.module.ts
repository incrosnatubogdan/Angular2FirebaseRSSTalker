import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


///// Start FireStarter

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module'

// Feature Modules

import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module'
///// End FireStarter

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ItemModule } from './items/shared/item.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ItemModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    UiModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
