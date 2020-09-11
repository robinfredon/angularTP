import { Component, OnInit, Input } from '@angular/core';
import { MovieFull } from 'src/app/Model/movie-full.model';
import { OmdbApiService } from 'src/app/Services/omdb-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() id: string;
  movie : MovieFull;
  
  constructor(private service: OmdbApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.service.getById(params.id).subscribe((movie) => this.movie = movie);
    });
  }

}
