import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class NotesService {
  notes:{ color: string, note: string }[] = [{"note":"note 1", "color":"red"},{"note":"note 2", "color":"red"},{"note":"note 3", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},];
  categories: { categoryName: string, notes: number[] }[] = [{categoryName: "category1", notes: [0, 1, 2]}, {categoryName: "category2", notes: [5, 6, 7]}];
  notesOrder: number[] = [...this.range(0, this.notes.length - 1)];
  categoryId: string;
  constructor(private router: Router) { }

  getCategories(){
    return this.categories;
  }

  getNotesOrder(){
    return this.notesOrder;
  }

  range(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
  }

  getNotes(id){
    return this.notes;

    if(!id){
      return this.notes;
    }
    else{
      this.categoryId = id;
      let notes = [];
      if(this.categories[id]){
        for(let element of this.categories[id].notes){
          if(this.notes[element]){
            notes.push(this.notes[element]);
          }
        }
      }
      return notes;
    }
  }

  getNote(id){
    if(this.notes[id]){
      return this.notes[id];
    }
  }

  createNote(data){
    if(this.categories[this.categoryId]){
      this.categories[this.categoryId].notes.push(this.notes.length);
    }
    this.notes.push({color: data.colorValue, note: data.createNote});
    this.router.navigate(['']);
  }

  updateNote(data, id){
    if(this.notes[id]){
      if(this.notes[id].note){
        this.notes[id].note = data.updateNote;
      }
      if(this.notes[id].color){
        this.notes[id].color = data.colorValue;
      }
    }
    this.router.navigate(['']);
  }
}
