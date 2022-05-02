import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-prestamo',
  templateUrl: './crear-prestamo.component.html',
  styleUrls: ['./crear-prestamo.component.css']
})
export class CrearPrestamoComponent implements OnInit {

  public formCrear : FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCrear= this.formBuilder.group(
      {
        identificacionUsuario: ['', Validators.required],
        idEquipo: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        numeroDias: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(1)]]
      }
    )
  }

  send():any{
    console.log(this.formCrear.value)
  }

}
