import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PaginaPrincipalComponent } from './paginas/principal/principal.component';
import { PrincipalMenuComponent } from './componentes/principal-menu/principal-menu.component';
import { RazaPrincipalComponent } from './paginas/raza/raza-principal/raza-principal.component';
import { EspeciePrincipalComponent } from './paginas/especie/especie-principal/especie-principal.component';
import { RazaMenuComponent } from './paginas/raza/raza-menu/raza-menu.component';
import { EspecieMenuComponent } from './paginas/especie/especie-menu/especie-menu.component';
import { RazaNuevoComponent } from './paginas/raza/raza-nuevo/raza-nuevo.component';
import { EspecieNuevoComponent } from './paginas/especie/especie-nuevo/especie-nuevo.component';
import { RazaListadoComponent } from './paginas/raza/raza-listado/raza-listado.component';
import { EspecieListadoComponent } from './paginas/especie/especie-listado/especie-listado.component';
import { RazaActualizarComponent } from './paginas/raza/raza-actualizar/raza-actualizar.component';
import { EspecieActualizarComponent } from './paginas/especie/especie-actualizar/especie-actualizar.component';




@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    PaginaPrincipalComponent,
    PrincipalMenuComponent,
    RazaPrincipalComponent,
    RazaMenuComponent,
    RazaNuevoComponent,
    RazaListadoComponent,
    RazaActualizarComponent,
    EspeciePrincipalComponent,
    EspecieMenuComponent,
    EspecieNuevoComponent,
    EspecieListadoComponent,
    EspecieActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
