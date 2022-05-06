import { Injectable } from '@angular/core';
import { Prestamo } from '../model/prestamo';
import { HttpService } from '../../../../core/services/http.service';
import { environment } from 'src/environments/environment';
import { Respuesta } from '../../../../shared/respuesta/respuesta';

@Injectable()
export class PrestamoService{ 
    
    constructor(protected http: HttpService){}

    public consultar(){
        return this.http.doGet<Prestamo[]>(`${environment.endpoint}/prestamos`, this.http.optsName('consultar prestamos'));
    }

    public crear(prestamo:Prestamo){
        return this.http.doPost<Prestamo, Respuesta<number>>(`${environment.endpoint}/prestamos`, prestamo);
    }

    public finalizar(prestamo:Prestamo){
        return this.http.doPut<Prestamo, void>(`${environment.endpoint}/prestamos/finalizar/${prestamo.id}`);
    }

    public actualizar(prestamo: Prestamo){
        return this.http.doPut<Prestamo, void>(`${environment.endpoint}/equipos/${prestamo.id}`, prestamo, this.http.optsName('actualizar prestamos'));
    }
}