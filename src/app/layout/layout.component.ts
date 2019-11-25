import { Component, OnInit } from '@angular/core';
import NotesService from '../services/notes.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  categroies: { categoryName: string, notes: number[] }[] = [];
  constructor( private notesService: NotesService ) { }

  ngOnInit() {
    this.categroies = this.notesService.getCategories();
  }

}
