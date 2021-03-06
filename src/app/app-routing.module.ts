import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesComponent } from './notes/notes.component';
import { SearchComponent } from './search/search.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'search/:search-value', component: SearchComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent },
  { path: 'category-details/:id', component: NotesComponent },
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
