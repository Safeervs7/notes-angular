import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class NotesService {
  notes:any = [{"note":"note 1", "color":"red"},{"note":"note 2", "color":"red"},{"note":"note 3", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},
              {"note":"note 4", "color":"red"},{"note":"note 5", "color":"red"},{"note":"note 6", "color":"red"},];
  constructor(private router: Router) { }

  getNotes(){
    return this.notes;
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
