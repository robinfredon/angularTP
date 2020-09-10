import { Component, OnInit, Input } from '@angular/core';
import { MovieOmdb } from 'src/app/Model/movie-omdb.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie : MovieOmdb;

  constructor() { }

  ngOnInit(): void { }

}
