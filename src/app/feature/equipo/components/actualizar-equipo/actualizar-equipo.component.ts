import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MensajesService } from '@core/services/mensajes.service';
import { Equipo } from '@equipo/shared/model/equipo';
import { EquipoService } from '@equipo/shared/service/equipo.service';

@Component({
  selector: 'app-actualizar-equipo',
  templateUrl: './actualizar-equipo.component.html',
  styleUrls: ['./actualizar-equipo.component.css']
})
export class ActualizarEquipoComponent implements OnInit {

  equipo: Equipo;

  constructor(
    public equipoService: EquipoService,
    private mensajeService: MensajesService,
    public dialogoRef: MatDialogRef<ActualizarEquipoComponent>
  ) { }

  ngOnInit(): void {
  }

  alCerrar(){
    this.equipoService.form.reset();
    this.equipoService.initializeFormGroup();
    this.dialogoRef.close();  
  }

  actualizar(){
    this.obtenerEquipoDelFormulario();
    console.log(this.equipo.id);
    this.equipoService.actualizar(this.equipo).subscribe(
      ()=>{
        this.mensajeService.exitoso('Equipo ha sido actualizado', '');
        this.equipoService.initializeFormGroup();
        this.alCerrar();
      }
    )
  }
  
  obtenerEquipoDelFormulario(){
    this.equipo=this.equipoService.form.value;
  }
  
  get controlesFormulario(){
    return this.equipoService.form.controls;
  }
}