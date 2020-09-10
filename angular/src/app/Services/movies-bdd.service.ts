import { Injectable } from '@angular/core';
import {Movie} from '../Model/movie.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import { MovieSearch } from '../Model/movie-search.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesBddService {

  lastSearch : MovieSearch;

  apiUrl = `${environment.apiUrl}/movies`;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Array<Movie>>{
    return this.httpClient.get<Array<Movie>>(this.apiUrl);
  }

  getLastSearch(): MovieSearch{
    return this.lastSearch;
  }

  filter(search: string): Observable<Array<Movie>> {
    const params: any = {};
    params.name = search;
    return this.httpClient.get<Array<Movie>>(this.apiUrl, {params});
  }

  getFromId(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.apiUrl}/${id}`);
  }

  add(newMovie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.apiUrl, newMovie);
  }

  update(movie: Movie): Observable<Movie> {
    return this.httpClient.put<Movie>(this.apiUrl, movie);
  }

  delete(movie: Movie) {
    return this.httpClient.delete(`${this.apiUrl}/${movie.id}`);
  }
}
