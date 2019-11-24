import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';
import { MyMaterialModule } from  './material.module';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { FormsModule }   from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    EditNoteComponent,
    CreateNoteComponent,
    DeleteNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
