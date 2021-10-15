import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/principal/principal.component';
import { RazaPrincipalComponent } from './paginas/raza/raza-principal/raza-principal.component';
import { RazaNuevoComponent } from './paginas/raza/raza-nuevo/raza-nuevo.component';
import { RazaActualizarComponent } from './paginas/raza/raza-actualizar/raza-actualizar.component';
import { EspeciePrincipalComponent } from './paginas/especie/especie-principal/especie-principal.component';
import { EspecieNuevoComponent } from './paginas/especie/especie-nuevo/especie-nuevo.component';
import { EspecieActualizarComponent } from './paginas/especie/especie-actualizar/especie-actualizar.component';
/**
 *
 * */

const routes: Routes = [
  {path:'principal',component:PaginaPrincipalComponent},
  {path:'Razas/Principal',component:RazaPrincipalComponent},
  {path:'Razas/Nuevo',component:RazaNuevoComponent},
  {path:'Razas/Actualizar',component:RazaActualizarComponent},
  {path:'Especies/Principal',component:EspeciePrincipalComponent},
  {path:'Especies/Nuevo',component:EspecieNuevoComponent},
  {path:'Especies/Actualizar',component:EspecieActualizarComponent},
  {path:'',redirectTo:'/principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
