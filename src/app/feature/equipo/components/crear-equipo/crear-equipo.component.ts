import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Equipo } from '../../shared/model/equipo';
import { EquipoService } from '../../shared/service/equipo.service';
import { MensajesService } from '../../../../core/services/mensajes.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  formCrear: FormGroup;
  equipo: Equipo;
  constructor(
    private formBuilder: FormBuilder,
    private equipoService: EquipoService,
    private mensajeService: MensajesService
  ) { }

  ngOnInit(): void {
    this.formCrear = this.formBuilder.group(
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
    return this.formCrear.controls;
  }

  obtenerEquipoDelFormulario(){
    this.equipo=this.formCrear.value;
  }

  send(){
    this.equipo=this.formCrear.value;
    console.log(this.equipo);
  }

}
