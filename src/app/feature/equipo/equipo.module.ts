import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { ActualizarEquipoComponent } from "./components/actualizar-equipo/actualizar-equipo.component";
import { CrearEquipoComponent } from "./components/crear-equipo/crear-equipo.component";
import { EliminarEquipoComponent } from "./components/eliminar-equipo/eliminar-equipo.component";
import { EquipoComponent } from "./components/equipo/equipo/equipo.component";
import { ListarEquipoComponent } from "./components/listar-equipo/listar-equipo.component";


@NgModule({
    declarations:[
        CrearEquipoComponent,
        ActualizarEquipoComponent,
        EliminarEquipoComponent,
        ListarEquipoComponent,
        EquipoComponent
    ],
    imports:[SharedModule,
    ]

})
export class EquipoModule{
}