import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEquipoComponent } from './listar-equipo.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipoService } from '../../shared/service/equipo.service';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpService } from '../../../../core/services/http.service';
import { ActualizarEquipoComponent } from '../actualizar-equipo/actualizar-equipo.component';
import { Equipo } from '../../shared/model/equipo';
import { MensajesService } from '../../../../core/services/mensajes.service';
import { of } from 'rxjs';

describe('ListarEquipoComponent', () => {
  let component: ListarEquipoComponent;
  let fixture: ComponentFixture<ListarEquipoComponent>;
  let equipoService: EquipoService;
  let mensajeService: MensajesService;
  const equipos: Equipo[] = [new Equipo(1,'SN1', 'Dell', true, 'Gamer'), new Equipo(2,'SN2', 'Apple', true, 'Básico')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEquipoComponent, ActualizarEquipoComponent ],
      imports:[MatTableModule, MatDialogModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers:[EquipoService, MensajesService,HttpService, {
        provide: MatDialogRef,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEquipoComponent);
  
    mensajeService= TestBed.inject(MensajesService);
    equipoService = TestBed.inject(EquipoService);
    spyOn(equipoService, 'obtener').and.returnValue(of(equipos));
    spyOn(equipoService, 'eliminar').and.returnValue(of(true));
    spyOn(mensajeService, 'exitoso');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ListarEquipoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should consultar Equipo', () => {
    component.obtenerEquipos();

    component.equipos.subscribe(resultado =>{
      expect(resultado.length).toBe(2);
      expect(resultado).toBe(equipos);
    })

    expect(equipoService.obtener).toHaveBeenCalled();
  });

  it('should eliminar Equipo', () => {
    const equipoPrueba = equipos[0];

    component.eliminarEquipo(equipoPrueba);

    expect(equipoService.eliminar).toHaveBeenCalledOnceWith(equipoPrueba);
    expect(mensajeService.exitoso).toHaveBeenCalled();
  });
});