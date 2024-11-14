import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FilmesComponent } from './filmes/filmes.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  {path: "", component: PrincipalComponent},
  {path: "filmes", component: FilmesComponent},
  {path: "cadastro-cliente", component: CadastroClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
