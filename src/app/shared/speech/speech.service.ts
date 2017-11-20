import { Injectable } from '@angular/core';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
  speechSynthesis: any;
  SpeechSynthesisUtterance: any;
}

@Injectable()
export class SpeechService {
  speechSynthesis: any;

  constructor() { }

  speak(text: string) {
    const { speechSynthesis, SpeechSynthesisUtterance }: IWindow = <IWindow>window;
    this.speechSynthesis = speechSynthesis;
    const utterText = new SpeechSynthesisUtterance(text);
    this.speechSynthesis.speak(utterText);
  }
}
