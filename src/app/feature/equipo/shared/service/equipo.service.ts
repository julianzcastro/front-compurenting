import { Injectable } from "@angular/core";
import { HttpService } from '../../../../core/services/http.service';
import { Equipo } from '../model/equipo';
import { Respuesta } from '../../../../shared/respuesta/respuesta';
import { environment } from "src/environments/environment";

@Injectable()
export class EquipoService{

    constructor(protected http: HttpService){
    }

    public obtener(){
        return this.http.doGet<Equipo[]>(`${environment.endpoint}/equipos`);
    }

    public crear(equipo:Equipo){
        return this.http.doPost<Equipo, Respuesta<number>>(`${environment.endpoint}/equipos`, equipo);
    }

    public actualizar(equipo: Equipo){
        return this.http.doPut<Equipo, void>(`${environment.endpoint}/equipos/${equipo.id}`, equipo, this.http.optsName('actualizar productos'));
    }
    
    public eliminar(equipo: Equipo){
        return this.http.doDelete<void>(`${environment.endpoint}/equipos/${equipo.id}`)
    }

}