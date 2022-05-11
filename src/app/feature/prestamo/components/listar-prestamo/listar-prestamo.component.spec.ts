import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PrestamoService } from '@prestamo/shared/service/prestamo.service';

import { ListarPrestamoComponent } from './listar-prestamo.component';
import { Prestamo } from '../../shared/model/prestamo';
import { HttpService } from '../../../../core/services/http.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { MensajesService } from '../../../../core/services/mensajes.service';

describe('ListarPrestamoComponent', () => {
  let component: ListarPrestamoComponent;
  let fixture: ComponentFixture<ListarPrestamoComponent>;
  let prestamoService: PrestamoService;
  let mensajeService:MensajesService;
  const prestamos: Prestamo[] = [new Prestamo(1, '100', 1, 5), new Prestamo(2, '1001', 2, 7)];

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [ ListarPrestamoComponent ],
      imports:[MatTableModule, BrowserAnimationsModule, HttpClientTestingModule],
      providers:[PrestamoService, MensajesService, HttpService]
    })
    .compileComponents();
  })); 

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPrestamoComponent);
    component = fixture.componentInstance;

    mensajeService= TestBed.inject(MensajesService);
    prestamoService = TestBed.inject(PrestamoService);
    spyOn(prestamoService, 'consultar').and.returnValue(of(prestamos));
    spyOn(prestamoService, 'finalizar').and.returnValue(of(true));
    spyOn(mensajeService, 'exitoso');
    fixture.detectChanges();
  });

  it('should create ListarPrestamoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should consultar Prestamo', () => {
    component.obtenerPrestamos();

    component.prestamos.subscribe(resultado =>{
      expect(resultado.length).toBe(2);
      expect(resultado).toBe(prestamos)
    })

    expect(prestamoService.consultar).toHaveBeenCalled();
  });

  it('should finalizar Prestamo', () => {
    const prestamo = prestamos[0]; 
    component.finalizarPrestamo(prestamo);
    expect(prestamoService.finalizar).toHaveBeenCalledWith(prestamo);
    expect(mensajeService.exitoso).toHaveBeenCalled();
  });

});