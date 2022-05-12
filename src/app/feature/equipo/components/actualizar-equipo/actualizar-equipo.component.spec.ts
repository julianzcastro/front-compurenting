import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEquipoComponent } from './actualizar-equipo.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EquipoService } from '../../shared/service/equipo.service';
import { MensajesService } from '../../../../core/services/mensajes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';



describe('ActualizarEquipoComponent', () => {
  let component: ActualizarEquipoComponent;
  let fixture: ComponentFixture<ActualizarEquipoComponent>;
  let equipoService: EquipoService;
  let mensajeService: MensajesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEquipoComponent ],
      imports:[CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientTestingModule, MatDialogModule],
      providers:[EquipoService, MensajesService, HttpService, {
        provide: MatDialogRef,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEquipoComponent);

    equipoService = TestBed.inject(EquipoService);
    mensajeService = TestBed.inject(MensajesService);
    spyOn(equipoService, 'actualizar').and.returnValue(of(true));
    spyOn(mensajeService, 'exitoso')
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ActualizarEquipoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should update Equipo', () => {

    expect(component.equipoService.form.valid).toBeFalsy();
    component.equipoService.form.controls.id.setValue(1);
    component.equipoService.form.controls.serial.setValue('SN1');
    component.equipoService.form.controls.marca.setValue('Dell');
    component.equipoService.form.controls.disponible.setValue('Si');
    component.equipoService.form.controls.tipoEquipo.setValue('Básico');
    component.equipoService.form.updateValueAndValidity();
    expect(component.equipoService.form.valid).toBeTruthy();

    component.actualizar();
    expect(equipoService.actualizar).toHaveBeenCalledOnceWith(component.equipo);
    expect(mensajeService.exitoso).toHaveBeenCalledTimes(1);
    
  });
});