import { Component, OnInit } from '@angular/core';
import { MovieSearch } from 'src/app/Model/movie-search.model';
import { MoviesBddService } from 'src/app/Services/movies-bdd.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies : MovieSearch;
  
  constructor(private service: MoviesBddService) { }

  ngOnInit(): void {
    this.movies = this.service.lastSearch;
  }

}
