import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { EquipoService } from "./equipo.service";
import { Equipo } from '../model/equipo';
import { HttpResponse } from "@angular/common/http";
import { Respuesta } from "@shared/respuesta/respuesta";


describe('Equipo Servicio', () => {
    let httpMock: HttpTestingController;
    let service: EquipoService;
    const apiEndpointEquipo = `${environment.endpoint}/equipos`;
  
    beforeEach(() => {
      const injector = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [EquipoService, HttpService]
      });
      httpMock = injector.inject(HttpTestingController);
      service = TestBed.inject(EquipoService);
    });
  
    it('should be created EquipoServicio', () => {
      const equipoService: EquipoService = TestBed.inject(EquipoService);
      expect(equipoService).toBeTruthy();
    });
  
    it('deberia listar equipos', () => {
      const dummyEquipos = [new Equipo(1,'SN1', 'Dell', true, 'Gamer'), new Equipo(2,'SN2', 'Apple', true, 'Básico')];
      service.obtener().subscribe(equipos => {
        expect(equipos.length).toBe(2);
        expect(equipos).toEqual(dummyEquipos);
      });
      const req = httpMock.expectOne(apiEndpointEquipo);
      expect(req.request.method).toBe('GET');
      req.flush(dummyEquipos);
    });
  
    it('deberia crear un equipo', () => {
      const dummyEquipo = new Equipo(1,'SN1', 'Dell', true, 'Gamer');
      const respuesta: Respuesta<number> = new Respuesta(1);
      service.crear(dummyEquipo).subscribe((resp) => {
        expect(resp).toEqual(respuesta);
      });
      const req = httpMock.expectOne(apiEndpointEquipo);
      expect(req.request.method).toBe('POST');
      req.event(new HttpResponse<Respuesta<number>>({body: respuesta}));
    });

    it('deberia actualizar un equipo', () => {
        const dummyEquipo = new Equipo(1,'SN1', 'Dell', true, 'Gamer');
        service.actualizar(dummyEquipo).subscribe((resp) => {
          expect(resp).toEqual(true);
        });
        const req = httpMock.expectOne(`${apiEndpointEquipo}/1`);
        expect(req.request.method).toBe('PUT');
        req.event(new HttpResponse<boolean>({body: true}));
      });
  
    it('deberia eliminar un equipo', () => {
      const dummyEquipo = new Equipo(1,'SN1', 'Dell', true, 'Gamer');
      service.eliminar(dummyEquipo).subscribe((respuesta) => {
        expect(respuesta).toEqual(true);
      });
      const req = httpMock.expectOne(`${apiEndpointEquipo}/1`);
      expect(req.request.method).toBe('DELETE');
      req.event(new HttpResponse<boolean>({body: true}));
    });
  });
  