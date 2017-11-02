import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { ItemService } from './item.service';

import {NewsPageComponent} from '../news-page/news-page.component';
import {CoursesListComponent} from '../courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule
y
      declarations: [
    CoursesListComponent,
    NewsPageComponent
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule { }
