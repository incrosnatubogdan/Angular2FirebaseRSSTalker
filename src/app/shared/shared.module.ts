import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';
import { SpeechService } from './speech/speech.service';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
    LoadingSpinnerComponent
  ],
  providers: [
    SpeechService
  ],
})
export class SharedModule { }
