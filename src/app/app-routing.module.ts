import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SecurityGuard } from '@core/guard/security.guard';
//import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*{ path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
{ path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) }*/
  { path: 'home', loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule), },
  { path: 'prestamo', loadChildren: () => import('@prestamo/prestamo.module').then(mod => mod.PrestamoModule) },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
