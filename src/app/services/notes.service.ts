import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class NotesService {
  notes:{ color: string, note: string }[] = [{"note":"note 1", "color":"red"},{"note":"note 2", "color":"red"},{"note":"note 3", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},];
  categroies: { categoryName: string, notes: number[] }[] = [{categoryName: "category1", notes: [1, 2, 3]}, {categoryName: "category2", notes: [5, 6, 7]}];
  constructor(private router: Router) { }

  getCategories(){
    return this.categroies;
  }

  getNotes(id){
    if(!id){
      return this.notes;
    }
    else{
      let notes = [];
      if(this.categroies[id]){
        for(let element of this.categroies[id].notes){
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
