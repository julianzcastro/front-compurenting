import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoComponent } from './components/equipo/equipo.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';
import { ListarEquipoComponent } from './components/listar-equipo/listar-equipo.component';
import { ActualizarEquipoComponent } from './components/actualizar-equipo/actualizar-equipo.component';


const routes: Routes = [
    {
      path: '',
      component: EquipoComponent,
      children: [
        {
          path: 'crear',
          component: CrearEquipoComponent
        },
        {
            path: 'actualizar',
            component: ActualizarEquipoComponent
        },
        {
            path: 'listar',
            component: ListarEquipoComponent
        }
      ]
    }
  ];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class EquipoRoutingModule{}