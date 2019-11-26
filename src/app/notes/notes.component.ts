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
  noteDetailsOrder: number[];
  categoryId: string;
  categories: { categoryName: string, notes: number[] }[] = [];
  searchValue:string;
  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(){
    this.searchValue = this.notesService.getSearchValue();
    if(this.searchValue){
      this.noteDetailsOrder = [...this.notesService.getNotesOrder()];
      this.noteDetailsArray = [...this.notesService.getNotes(this.categoryId)];
      let newOrder = [];
      for(let element of this.noteDetailsOrder){
        if(this.noteDetailsArray[element].note.includes(this.searchValue)){
          newOrder.push(element);
        }
      }
      this.noteDetailsOrder = [...newOrder];
      this.notesService.setSearchValue(null);
      return;
    }
    this.route.params.subscribe(paramsId => {
      this.categoryId = paramsId.id;
    });
    this.noteDetailsArray = [...this.notesService.getNotes(this.categoryId)];
    this.categories = [...this.notesService.getCategories()];

    if(this.categoryId){
      this.noteDetailsOrder = this.categories[this.categoryId].notes;
    }
    else{
      this.noteDetailsOrder = [...this.notesService.getNotesOrder()];
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    if(this.categoryId){
      if(this.categories[this.categoryId]){
        moveItemInArray(this.categories[this.categoryId].notes, event.previousIndex, event.currentIndex);
        this.noteDetailsArray = this.notesService.getNotes(this.categoryId);
      }
    }
    else{
      moveItemInArray(this.noteDetailsOrder, event.previousIndex, event.currentIndex);
    }
  }

  createNote(){
    this.router.navigate(['/create']);
  }

}