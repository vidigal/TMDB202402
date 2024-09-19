import { Component, OnInit } from '@angular/core';
import { FilmesService } from './filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss'
})
export class FilmesComponent implements OnInit {

  filmes: any;

  constructor(private filmeService: FilmesService) { }

  ngOnInit(): void {

    this.filmeService.listarFilmesTrending().subscribe(
      data => {
        this.filmes = data.results;
      }
    );

  }

}
