import { Injectable } from '@angular/core';
import {Movie} from '../Movie/movie.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesBddService {

  apiUrl = `${environment.apiUrl}/movies`;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Array<Movie>>{
    return this.httpClient.get<Array<Movie>>(this.apiUrl);
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
