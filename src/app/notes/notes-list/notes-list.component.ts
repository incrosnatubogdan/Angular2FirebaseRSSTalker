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

  notes;
  content;
  speechData: string;
  isListening: Boolean = true;
  speechHistory: any[] = [];

  constructor(private noteService: NoteService,
              private speechRecognitionService: SpeechRecognitionService)  {
    this.speechData = '';
    // this.listen();
  }

  ngOnInit() {
    // this.notes = this.noteService.getData()
    this.notes = this.noteService.getSnapshot()
  }

  createNote() {
    this.noteService.create(this.content);
    this.content = ''
  }

  toggleListen() {
    if (!!this.isListening) {
      this.isListening = false;
      this.speechRecognitionService.stop();
    } else {
      this.isListening = true;
      this.listen();
    }

    console.log('toggleListen', this.isListening);
  }

  listen(): void {
    console.log('this.isListening', this.isListening);
    this.speechRecognitionService.record()
      .subscribe(
        // listener
        (value) => {
          if (_.isEmpty(value)) {
            console.log('llllooodash');
          }

          value = value.trim().toLowerCase();

          this.speechData = value;
          const actionType = 'mic';
          const actionTitle = 'Speach';
          
          console.log('actionTitle', actionTitle);
          console.log('actionType', actionType);

          this.speechHistory.push({
            text: value,
            time: new Date(),
            type: actionType,
            title: actionTitle
          });

          this.isListening = false;
        },
        // error
        (err) => {
          console.log(err);
          if (err.error === 'no-speech') {
            console.log('--restatring service--');
            this.listen();
          }
        },
        // completion
        () => {
          console.log('--complete--');
        }
      );
  }
}
