import { Injectable } from '@angular/core';
import {Movie} from './movie.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesBddService {

  apiUrl = `${environment.apiUrl}/devs`;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Array<Movie>>{
    return this.httpClient.get<Array<Movie>>(this.apiUrl);
  }
}
