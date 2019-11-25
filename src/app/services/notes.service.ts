import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class NotesService {
  notes:{ color: string, note: string }[] = [{"note":"note 1", "color":"red"},{"note":"note 2", "color":"red"},{"note":"note 3", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},];
  categories: { categoryName: string, notes: number[] }[] = [{categoryName: "category1", notes: [0, 1, 2]}, {categoryName: "category2", notes: [4, 5, 6]}];
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
      // var index = category.notes.indexOf(id);
      // if (index !== -1){
      //   category.notes.splice(index, 1);
      // } 
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
    console.log(this.categoryId);
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
