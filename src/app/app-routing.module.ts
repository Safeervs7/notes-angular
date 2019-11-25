import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent },
  { path: 'category-details/:id', component: NotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
