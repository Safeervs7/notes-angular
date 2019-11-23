import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  noteDetailsArray: Object;
  constructor() { 
    this.noteDetailsArray = [{'note':"note 1", "color":"red"}, {'note':"note 2", "color":"red"}];
  }

  ngOnInit() {
  }

}
