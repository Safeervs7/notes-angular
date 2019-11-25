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
  categoryId: string;
  categories: { categoryName: string, notes: number[] }[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(){
    this.route.params.subscribe(paramsId => {
      this.categoryId = paramsId.id;
    });
    this.noteDetailsArray = this.notesService.getNotes(this.categoryId);
    this.categories = this.notesService.getCategories();
  }


  drop(event: CdkDragDrop<any[]>) {
    if(this.categoryId){
      console.log(this.categoryId);
      console.log(this.categories[this.categoryId].notes);
      if(this.categories[this.categoryId]){
        moveItemInArray(this.categories[this.categoryId].notes, event.previousIndex, event.currentIndex);
        this.noteDetailsArray = this.notesService.getNotes(this.categoryId);
      }
    }
    else{
      moveItemInArray(this.noteDetailsArray, event.previousIndex, event.currentIndex);
    }
  }

  createNote(){
    this.router.navigate(['/create']);
  }

}