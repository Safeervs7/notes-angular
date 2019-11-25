import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import NotesService from '../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  noteDetailsArray: { color: string, note: string }[] = [];
  id: string;
  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(){
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    this.noteDetailsArray = this.notesService.getNotes(this.id);
  }


  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.noteDetailsArray, event.previousIndex, event.currentIndex);
  }

}