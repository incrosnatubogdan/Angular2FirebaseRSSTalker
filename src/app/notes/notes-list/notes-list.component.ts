import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import * as _ from 'lodash';
import { SpeechRecognitionService } from '../speech-recognition.service';
import {NoteDetailComponent} from '../note-detail/note-detail.component';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() { }
  }
