import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() noteDetails: Object;
  @Input() index: any;
  public deleteEvent: Function;
  constructor() { 
  }

  ngOnInit() {
  }

}
