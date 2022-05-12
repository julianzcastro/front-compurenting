import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/component/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'home', loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule), },
  { path: 'prestamo', loadChildren: () => import('@prestamo/prestamo.module').then(mod => mod.PrestamoModule) },
  { path: 'equipo', loadChildren: () => import('@equipo/equipo.module').then(mod => mod.EquipoModule) }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
