import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajesService } from '@core/services/mensajes.service';
import { Equipo } from '@equipo/shared/model/equipo';
import { EquipoService } from '@equipo/shared/service/equipo.service';

@Component({
  selector: 'app-actualizar-equipo',
  templateUrl: './actualizar-equipo.component.html',
  styleUrls: ['./actualizar-equipo.component.css']
})
export class ActualizarEquipoComponent implements OnInit {

  formActualizar: FormGroup;
  equipo: Equipo;
  constructor(
    private formBuilder: FormBuilder,
    private equipoService: EquipoService,
    private mensajeService: MensajesService
  ) { }

  ngOnInit(): void {
    this.formActualizar = this.formBuilder.group(
      {
        serial: ['', Validators.required],
        marca:['', Validators.required],
        disponible:['true', Validators.required],
        tipoEquipo:['Básico', Validators.required]
      }
    )
  }

  crear(){
    this.obtenerEquipoDelFormulario();
    this.equipoService.crear(this.equipo).subscribe(
      ()=>{
        this.mensajeService.exitoso('Equipo creado', '');
      }
    )
  }

  get controlesFormulario(){
    return this.formActualizar.controls;
  }

  obtenerEquipoDelFormulario(){
    this.equipo=this.formActualizar.value;
  }

  send(){
    this.equipo=this.formActualizar.value;
    console.log(this.equipo);
  }

}
