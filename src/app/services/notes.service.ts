import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export default class NotesService {
  notes:{ color: string, note: string }[] = [{"note":"note 1", "color":"#fff4dc"},{"note":"note 2", "color":"#fff4dc"},{"note":"note 3", "color":"#fff4dc"},
              {"note":"note 4", "color":"#fff4dc"},{"note":"note 5", "color":"#fff4dc"},{"note":"note 6", "color":"#fff4dc"},];
  categories: { categoryName: string, notes: number[] }[] = [{categoryName: "category1", notes: [0, 1, 2]}, {categoryName: "category2", notes: [3, 4, 5]}];
  notesOrder: number[] = [...this.range(0, this.notes.length - 1)];
  searchValue: string;
  categoryId: string;
  constructor(private router: Router) { }

  setSearchValue(value){
    this.searchValue = value;
  }

  getSearchValue(){
    return this.searchValue;
  }

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
    if(id){
      this.categoryId = id;
    }
    else{
      this.categoryId = null;
    }
    return this.notes;
  }

  deleteNoteByIndex(id){
    for(let category of this.categories){
      for(let item of category.notes){
        if(item == id){
          category.notes.splice(id, 1);
        }
        else if(item > id){
          let index = category.notes.indexOf(item);
          category.notes[index] = (item - 1);
        }
      }
    }
    this.notes.splice(id,1);
    this.notesOrder.pop();
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
    this.notesOrder.push(this.notesOrder.length);
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
