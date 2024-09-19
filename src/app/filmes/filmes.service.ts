import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilmeTrendingResponse } from '../model/ifilmeTrendingResponse';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+environment.apiKey
      })
    };
  }

  listarFilmesTrending(): Observable<IFilmeTrendingResponse> {
    let url = environment.api_url+"trending/movie/day?language=pt-BR&page=1";
    const options = this.getHeaders();

    return this.http.get<IFilmeTrendingResponse>(url, options);
  }
}
