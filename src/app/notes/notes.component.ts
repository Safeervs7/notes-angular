import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import NotesService from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent {
  noteDetailsArray: { color: string, note: string }[] = [];
  constructor(private notesService: NotesService) { 
    this.noteDetailsArray = this.notesService.getNotes();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.noteDetailsArray, event.previousIndex, event.currentIndex);
  }

}