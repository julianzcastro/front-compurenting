import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrearPrestamoComponent } from './crear-prestamo.component';
import { PrestamoService } from '../../shared/service/prestamo.service';
import { MensajesService } from '../../../../core/services/mensajes.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Respuesta } from '../../../../shared/respuesta/respuesta';
import { of } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';

describe('CrearPrestamoComponent', () => {
  let component: CrearPrestamoComponent;
  let fixture: ComponentFixture<CrearPrestamoComponent>;
  let prestamoService: PrestamoService;
  let mensajeService: MensajesService;
  const respuesta: Respuesta<number> = new Respuesta(1);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPrestamoComponent ],
      imports:[ CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers:[PrestamoService, MensajesService, HttpService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPrestamoComponent);
    component = fixture.componentInstance;
    
    prestamoService = TestBed.inject(PrestamoService);
    mensajeService = TestBed.inject(MensajesService);
    spyOn(prestamoService, 'crear').and.returnValue(of(respuesta));
    spyOn(mensajeService, 'exitoso');
    fixture.detectChanges();
  });

  it('should create CrearPrestamoComponent', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create Prestamo', () => {
    expect(component.formCrear.valid).toBeFalsy();
    component.formCrear.controls.identificacionUsuario.setValue('100733');
    component.formCrear.controls.idEquipo.setValue(1);
    component.formCrear.controls.numeroDias.setValue(5);
    expect(component.formCrear.valid).toBeTruthy();

    component.crear();

    expect(component.prestamo.idEquipo).toBe(1);
    expect(component.prestamo.identificacionUsuario).toBe('100733');
    expect(component.prestamo.numeroDias).toBe(5);
    expect(prestamoService.crear).toHaveBeenCalledOnceWith(component.prestamo);
    expect(mensajeService.exitoso).toHaveBeenCalledTimes(1);
  });
  
});