import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrestamoComponent } from './feature/prestamo/components/prestamo/prestamo.component';
import { CrearPrestamoComponent } from './feature/prestamo/components/crear-prestamo/crear-prestamo.component';
import { ActualizarPrestamoComponent } from './feature/prestamo/components/actualizar-prestamo/actualizar-prestamo.component';
import { FinalizarPrestamoComponent } from './feature/prestamo/components/finalizar-prestamo/finalizar-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrestamoComponent,
    CrearPrestamoComponent,
    ActualizarPrestamoComponent,
    FinalizarPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
