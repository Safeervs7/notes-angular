import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'create', component: CreateNoteComponent },
  { path: 'edit/:id', component: EditNoteComponent },
  { path: 'delete/:id', component: DeleteNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
