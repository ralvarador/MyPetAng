import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { PaginaPrincipalComponent } from './paginas/principal/principal.component';
import { PrincipalMenuComponent } from './componentes/principal-menu/principal-menu.component';
import { RazaPrincipalComponent } from './paginas/raza/raza-principal/raza-principal.component';
import { RazaMenuComponent } from './paginas/raza/raza-menu/raza-menu.component';
import { RazaNuevoComponent } from './paginas/raza/raza-nuevo/raza-nuevo.component';
import { RazaListadoComponent } from './paginas/raza/raza-listado/raza-listado.component';
import { RazaActualizarComponent } from './paginas/raza/raza-actualizar/raza-actualizar.component';



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
    RazaActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
