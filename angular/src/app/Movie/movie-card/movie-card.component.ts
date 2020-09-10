import { Component, OnInit, Input } from '@angular/core';
import { MovieFull } from '../../Model/movie-full.model';
import { ActivatedRoute } from '@angular/router';
import { OmdbApiService } from 'src/app/Services/omdb-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() id: string;
  movie : MovieFull;
  test_id : string = "tt4244162";

  constructor(private service: OmdbApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
         this.service.getById(this.id).subscribe((movie) => this.movie = movie);
       });
  }

}
