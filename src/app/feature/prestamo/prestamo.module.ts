import { NgModule } from "@angular/core";
import { CrearPrestamoComponent } from './components/crear-prestamo/crear-prestamo.component';
import { SharedModule } from '@shared/shared.module';
import { ListarPrestamoComponent } from './components/listar-prestamo/listar-prestamo.component';
import { PrestamoRoutingModule } from './prestamo-routing.module';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PrestamoService } from './shared/service/prestamo.service';

@NgModule({
    declarations:[
        CrearPrestamoComponent,
        ListarPrestamoComponent,
        PrestamoComponent
    ],
    imports: [
        SharedModule,
        PrestamoRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers:[PrestamoService]
})
export class PrestamoModule{

}