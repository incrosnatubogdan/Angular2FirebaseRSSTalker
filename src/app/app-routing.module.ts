import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { UserLoginComponent } from './ui/user-login/user-login.component';
import { NewsPageComponent } from './items/news-page/news-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { CoreModule } from './core/core.module'

const routes: Routes = [
  { path: '', component: ReadmePageComponent },
  { path: 'login', component: UserLoginComponent, },
  { path: 'items', component: NewsPageComponent, canActivate: [AuthGuard]},
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
