import { Component, OnInit, Input } from '@angular/core';
import NotesService from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() noteDetails: Object;
  @Input() index: any;
  constructor(private notesService: NotesService) { 
  }

  ngOnInit() {
  }

  invokeDeleteEvent(id){
    this.notesService.deleteNoteByIndex(id);
  }

}
