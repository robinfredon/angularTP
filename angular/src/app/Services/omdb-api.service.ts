import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  apiUrl = `${environment.apiOmdbUrl}${environment.apiKey}`;

  constructor(private httpClient: HttpClient) { 

  }
}
