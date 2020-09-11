import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {MovieFull} from '../Model/movie-full.model';
import { MovieSearch } from '../Model/movie-search.model';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  apiUrl = `${environment.apiOmdbUrl}${environment.apiKey}`;

  constructor(private httpClient: HttpClient) { 
  }

  getByName(name : string): Observable<MovieFull>{
    const requestUrl = this.apiUrl + '&t=' + name;
    return this.httpClient.get<MovieFull>(requestUrl);
  }

  getById(id : string): Observable<MovieFull>{
    const requestUrl = this.apiUrl + '&i=' + id;
    return this.httpClient.get<MovieFull>(requestUrl);
  }

  getSearch(search: String = null): Observable<MovieSearch> {
    if(search !== null){
      if(search.length >= 3){
        const requestUrl = this.apiUrl + '&s=' + search;
        return this.httpClient.get<MovieSearch>(requestUrl);
      }
    }
  }
}
