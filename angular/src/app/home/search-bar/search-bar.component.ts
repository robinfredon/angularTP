import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MovieSearch } from 'src/app/Model/movie-search.model';
import { OmdbApiService } from 'src/app/Services/omdb-api.service';
import {debounceTime, switchMap} from 'rxjs/operators';

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

  constructor(fb: FormBuilder, private service: OmdbApiService) { 
    this.searchCtrl = fb.control('');
    this.searchForm = fb.group({
      search: this.searchCtrl,
    });
  }

  ngOnInit(): void {
    this.service.getSearch(this.searchStr).subscribe((result) => {
      this.movies = result;
    });

    /*this.searchCtrl.valueChanges
      .pipe(
        debounceTime(500),
        switchMap(value => this.service.filter(value))
      )
      .subscribe(result => this.movies = result);*/
  }

}
