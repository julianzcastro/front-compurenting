import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearEquipoComponent } from './crear-equipo.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MensajesService } from '../../../../core/services/mensajes.service';
import { EquipoService } from '../../shared/service/equipo.service';
import { HttpService } from '../../../../core/services/http.service';
import { Respuesta } from '@shared/respuesta/respuesta';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from '../../../../core/material.module';
describe('CrearEquipoComponent', () => {
  let component: CrearEquipoComponent;
  let fixture: ComponentFixture<CrearEquipoComponent>;
  let equipoService: EquipoService;
  let mensajeService: MensajesService;
  const respuesta: Respuesta<number> = new Respuesta(1);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEquipoComponent ],
      imports:[CommonModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule, HttpClientTestingModule, MatFormFieldModule, MaterialModule],
      providers:[MensajesService, EquipoService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEquipoComponent);
    
    equipoService = TestBed.inject(EquipoService);
    mensajeService = TestBed.inject(MensajesService);
    spyOn(equipoService, 'crear').and.returnValue(of(respuesta));
    spyOn(mensajeService, 'exitoso')
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CrearEquipoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create Equipo', () => {
    expect(component.formCrear.valid).toBeFalsy();
    component.formCrear.controls.serial.setValue('SN1');
    component.formCrear.controls.marca.setValue('Dell');
    component.formCrear.controls.tipoEquipo.setValue('Gamer');
    expect(component.formCrear.valid).toBeTruthy();

    component.crear();

    expect(component.equipo.serial).toBe('SN1');
    expect(component.equipo.marca).toBe('Dell');
    expect(component.equipo.disponible).toBeTruthy();
    expect(component.equipo.tipoEquipo).toBe('Gamer');
    expect(equipoService.crear).toHaveBeenCalledOnceWith(component.equipo);
    expect(mensajeService.exitoso).toHaveBeenCalledTimes(1);
    

  });
});
