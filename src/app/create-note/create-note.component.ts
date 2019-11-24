import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  color: string;
  constructor() { 
    this.color = 'red';
  }

  ngOnInit() {
  }

  createNote(note: NgForm) {
    console.log(note.value);
  }

}
