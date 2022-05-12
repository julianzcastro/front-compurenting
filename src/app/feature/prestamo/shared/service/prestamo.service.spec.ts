import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Prestamo } from "../model/prestamo";
import { PrestamoService } from '@prestamo/shared/service/prestamo.service';
import { Respuesta } from "@shared/respuesta/respuesta";
import { HttpResponse } from "@angular/common/http";


describe('Prestamo Servicio', () => {
    let httpMock: HttpTestingController;
    let service: PrestamoService;
    const apiEndpointPrestamo = `${environment.endpoint}/prestamos`;
  
    beforeEach(() => {
      const injector = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [PrestamoService, HttpService]
      });
      httpMock = injector.inject(HttpTestingController);
      service = TestBed.inject(PrestamoService);
    });
  
    it('should be created', () => {
      const prestamoService: PrestamoService = TestBed.inject(PrestamoService);
      expect(prestamoService).toBeTruthy();
    });
  
    it('deberia listar prestamos', () => {
        const dummyPrestamos = [new Prestamo(1, '100', 1, 5), new Prestamo(2, '1001', 2, 7)];
        service.consultar().subscribe(prestamos => {
          expect(prestamos.length).toBe(2);
          expect(prestamos).toEqual(dummyPrestamos);
        });
        const req = httpMock.expectOne(apiEndpointPrestamo);
        expect(req.request.method).toBe('GET');
        req.flush(dummyPrestamos);
    });
  
    it('deberia crear un prestamo', () => {
      const dummyPrestamo = new Prestamo(1, '100', 1, 5);
      const respuesta: Respuesta<number> = new Respuesta(1);
      service.crear(dummyPrestamo).subscribe((resp) => {
        expect(resp).toEqual(respuesta);
      });
      const req = httpMock.expectOne(apiEndpointPrestamo);
      expect(req.request.method).toBe('POST');
      req.event(new HttpResponse<Respuesta<number>>({body: respuesta}));
    });
  
    it('deberia finalizar un equipo', () => {
      const dummyPrestamo = new Prestamo(1, '100', 1, 5);
      service.finalizar(dummyPrestamo).subscribe((respuesta) => {
        expect(respuesta).toEqual(true);
      });
      const req = httpMock.expectOne(`${apiEndpointPrestamo}/finalizar/1`);
      expect(req.request.method).toBe('PUT');
      req.event(new HttpResponse<boolean>({body: true}));
    });
  });
  