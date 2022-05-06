import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PrestamoService } from '@prestamo/shared/service/prestamo.service';

import { ListarPrestamoComponent } from './listar-prestamo.component';
import { Prestamo } from '../../shared/model/prestamo';
import { HttpService } from '../../../../core/services/http.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable} from 'rxjs';
import { MensajesService } from '../../../../core/services/mensajes.service';

describe('ListarPrestamoComponent', () => {
  let component: ListarPrestamoComponent;
  let fixture: ComponentFixture<ListarPrestamoComponent>;
  let prestamoService: PrestamoService;
  let mensajeService:MensajesService;
  let prestamos: Observable<Prestamo[]>= new Observable;
  let prestamo : Prestamo = {
    id:2, identificacionUsuario:'100733', idEquipo:3, numeroDias:15
  };

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
    spyOn(prestamoService, 'consultar').and.returnValue(prestamos);
    spyOn(prestamoService, 'finalizar');
    spyOn(mensajeService, 'exitoso');
    fixture.detectChanges();
  });

  it('should create ListarPrestamoComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should consultar Prestamo', () => {
    component.obtenerPrestamos();

    expect(prestamoService.consultar).toHaveBeenCalled();
  });

  it('should finalizar Prestamo', () => {
    component.finalizarPrestamo(prestamo);

    expect(prestamoService.finalizar).toHaveBeenCalled();
    expect(mensajeService.exitoso).toHaveBeenCalled();
  });

});
