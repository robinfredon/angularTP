import { Component, OnInit } from '@angular/core';
import { MovieSearch } from 'src/app/Model/movie-search.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : MovieSearch;
  
  constructor() { }

  ngOnInit(): void {
  }

}
