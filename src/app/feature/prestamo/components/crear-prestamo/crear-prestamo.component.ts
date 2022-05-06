import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestamoService } from '../../shared/service/prestamo.service';
import { Prestamo } from '../../shared/model/prestamo';
import { MensajesService } from '../../../../core/services/mensajes.service';

const REGEX_NUMERO_DECIMAL = /^-?(0|[1-9]\d*)?$/;
@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamo.component.html',
  styleUrls: ['./crear-prestamo.component.css']
})
export class CrearPrestamoComponent implements OnInit {

  public formCrear : FormGroup;
  public prestamo: Prestamo;

  constructor(
    private formBuilder: FormBuilder,
    private prestamoService: PrestamoService,
    private mensajeService: MensajesService
    ) { }

  ngOnInit(): void {
    this.formCrear= this.formBuilder.group(
      {
        identificacionUsuario: ['', Validators.required],
        idEquipo: ['', [Validators.required, Validators.pattern(REGEX_NUMERO_DECIMAL), Validators.min(1)]],
        numeroDias: ['', [Validators.required, Validators.pattern(REGEX_NUMERO_DECIMAL), Validators.min(1)]]
      }
    )
  }

  crear(){
    this.obtenerPrestamoDelFormulario();
    this.prestamoService.crear(this.prestamo).subscribe(
      ()=>{
        this.mensajeService.exitoso('Prestamo creado', '');
      }
    );
  }

  obtenerPrestamoDelFormulario(){
    this.prestamo = this.formCrear.value;
  }

  send():any{
    this.prestamo=this.formCrear.value;
    console.log(
      this.prestamo
    )
  }

}
