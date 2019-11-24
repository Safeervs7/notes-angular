import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import NotesService from '../services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  color: string = "";
  note: string = "";
  id: string;
  constructor(private route: ActivatedRoute, private notesService: NotesService) {}

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
        this.id = paramsId.id;
    });
    this.setNoteDetails();
  }

  setNoteDetails(){
    let data = this.notesService.getNote(this.id);
    this.color = data.color;
    this.note = data.note;
  }

  updateNote(note: NgForm) {
    this.notesService.updateNote(note.value, this.id);
  }

}
