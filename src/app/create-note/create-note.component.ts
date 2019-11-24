import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import NotesService from '../services/notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  color: string;
  constructor(private notesService: NotesService) { 
    this.color = 'red';
  }

  ngOnInit() {
  }

  createNote(note: NgForm) {
    this.notesService.createNote(note.value);
  }

}
