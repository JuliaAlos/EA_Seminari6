import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  { path: '', component: ListarProductoComponent },
  { path: 'crear-producto', component: CrearProductoComponent},
  { path: 'editar-producto/:id', component: CrearProductoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } //Redirecciona las direcciones incorectas a la principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }