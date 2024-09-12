import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjFjM2M5OTYxYTUyNWQ2OWQ4MTI1ZTFhZGY5NzBiNyIsInN1YiI6IjYyOWZlNWNlMzVkMWJjMDA5YjU3NzdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zBrUteoQPPsjlA4SjGddHnB5t_bFMobHOsNdUAbkzYw'
      })
    };
  }

  listarFilmesTrending(): Observable<any> {
    let url = "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR";
    const options = this.getHeaders();

    return this.http.get<any>(url, options);
  }
}
