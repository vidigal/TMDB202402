import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';
import { IFilme } from '../model/ifilme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent implements OnInit {

  filmes: IFilme[] = [];
  isError: boolean = false;

  constructor(private filmeService: FilmesService) { }

  ngOnInit(): void {

    this.filmeService.listarFilmesTrending().subscribe(
      {
        next: (res) => {
          this.filmes = res.results;
        },
        error: (err) => {
          this.isError = true;
        },
        complete: () => {
          this.isError = false;
          console.log("Completou");
        }
      }
    );

  }

}
