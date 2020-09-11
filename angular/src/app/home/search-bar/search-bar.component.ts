import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MovieSearch } from 'src/app/Model/movie-search.model';
import { OmdbApiService } from 'src/app/Services/omdb-api.service';
import {debounceTime, switchMap} from 'rxjs/operators';
import { MoviesBddService } from 'src/app/Services/movies-bdd.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  movies : MovieSearch;
  searchStr : String;

  searchForm: FormGroup;
  searchCtrl: FormControl;

  constructor(fb: FormBuilder, private service: OmdbApiService, private serviceMovie: MoviesBddService) { 
    this.searchCtrl = fb.control('');
    this.searchForm = fb.group({
      search: this.searchCtrl,
    });
  }

  ngOnInit(): void {
    //this.serviceMovie.initLastSearch();
    //this.serviceMovie.lastSearch = this.service.getSearch(this.searchStr);
    /*this.service.getSearch(this.searchStr).subscribe((result) => {
      this.movies = result;
    });*/

    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe(result => {
        this.searchStr = result;
        this.service.getSearch(result).subscribe((resultBis) => this.serviceMovie.lastSearch.next(resultBis));
      });

      this.serviceMovie.lastSearch.subscribe((movies) => {
        this.movies = movies;
      });
  }

}
