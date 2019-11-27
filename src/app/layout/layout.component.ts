import { Component, OnInit, Input } from '@angular/core';
import NotesService from '../services/notes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  categroies: { categoryName: string, notes: number[] }[] = [];
  @Input() searchValue: string;
  constructor( private notesService: NotesService, private router: Router,  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.categroies = this.notesService.getCategories();
  }

  searchNote(){
    this.notesService.setSearchValue(this.searchValue);
    if(this.searchValue){
      this.router.navigate(['/search/'+ (this.searchValue)]);
    }
    else{
      this.router.navigate(['']);
    }
  }

}
