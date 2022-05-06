import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { ActualizarEquipoComponent } from "./components/actualizar-equipo/actualizar-equipo.component";
import { CrearEquipoComponent } from "./components/crear-equipo/crear-equipo.component";
import { EquipoComponent } from "./components/equipo/equipo.component";
import { ListarEquipoComponent } from "./components/listar-equipo/listar-equipo.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { EquipoRoutingModule } from './equipo-routing.module';
import { EquipoService } from './shared/service/equipo.service';

@NgModule({
    declarations:[
        CrearEquipoComponent,
        ActualizarEquipoComponent,
        ListarEquipoComponent,
        EquipoComponent
    ],
    imports:[SharedModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        EquipoRoutingModule
    ],
    providers:[
        EquipoService
    ],
    entryComponents:[EquipoComponent]
})
export class EquipoModule{
}