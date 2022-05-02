import { Routes, RouterModule } from '@angular/router';

import { NgModule } from "@angular/core";
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { CrearPrestamoComponent } from './components/crear-prestamo/crear-prestamo.component';
import { ListarPrestamoComponent } from './components/listar-prestamo/listar-prestamo.component';
import { FinalizarPrestamoComponent } from './components/finalizar-prestamo/finalizar-prestamo.component';



const routes: Routes = [
    {
      path: '',
      component: PrestamoComponent,
      children: [
        {
          path: 'crear',
          component: CrearPrestamoComponent
        },
        {
          path: 'listar',
          component: ListarPrestamoComponent
        },
        {
          path: 'finalizar',
          component: FinalizarPrestamoComponent
        }
      ]
    }
  ];

  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
  export class PrestamoRoutingModule{}
