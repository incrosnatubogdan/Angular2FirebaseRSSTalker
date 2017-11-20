import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  speechSynthesis: any;
  SpeechSynthesisUtterance: any;
}

@Injectable()
export class SpeechService {
  speechSynthesis: any;
  speechRecognition: any;

  constructor() { }

  speak(text: string): Observable<any> {
    return Observable.create(observer => {
      const { speechSynthesis, SpeechSynthesisUtterance }: IWindow = <IWindow>window;
      this.speechSynthesis = speechSynthesis;
      const utterText = new SpeechSynthesisUtterance(text);
      utterText.onend = e => {
        observer.next(e);
        observer.complete();
      };

      this.speechSynthesis.speak(utterText);
    });
  }

  record(): Observable<string> {
    return Observable.create(observer => {
      const { webkitSpeechRecognition }: IWindow = <IWindow>window;
      const speechRecognition = new webkitSpeechRecognition();

      speechRecognition.onresult = event => {
        observer.next(event);
        observer.complete();
      };

      speechRecognition.start();

      return () => {
        speechRecognition.stop();
      }
    });
  }
}
