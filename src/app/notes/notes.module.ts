import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { NoteService } from './note.service';

import {NotesListComponent} from './notes-list/notes-list.component';

import {BrowserModule} from '@angular/platform-browser';
import {AngularFireModule} from 'angularfire2';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ShareButtonsModule.forRoot(),
    AngularFireDatabaseModule
  ],
  declarations: [
    NotesListComponent
  ],
  providers: [
    NoteService
  ]
})
export class NotesModule { }
