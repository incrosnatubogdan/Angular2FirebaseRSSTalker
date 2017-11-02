import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { ItemService } from './profile.service';

import {UserProfileComponent} from '../user-profile/user-profile.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
  ],
    declarations: [
      UserProfileComponent
    ],
  providers: [
    ItemService
  ]
})
export class ProfileModule { }
