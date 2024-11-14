import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilmesComponent } from './filmes/filmes.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    FilmesComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
