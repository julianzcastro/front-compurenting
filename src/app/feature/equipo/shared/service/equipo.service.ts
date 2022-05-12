import { Injectable } from "@angular/core";
import { HttpService } from '../../../../core/services/http.service';
import { Equipo } from '../model/equipo';
import { Respuesta } from '../../../../shared/respuesta/respuesta';
import { environment } from "src/environments/environment";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class EquipoService{

    form: FormGroup = new FormGroup({
        id: new FormControl('', [Validators.min(1), Validators.required]),
        serial: new FormControl('', Validators.required),
        marca: new FormControl('', Validators.required),
        disponible: new FormControl('true', Validators.required),
        tipoEquipo: new FormControl('Básico', Validators.required)
    });

    constructor(protected http: HttpService){
    }

    public obtener(){
        return this.http.doGet<Equipo[]>(`${environment.endpoint}/equipos`);
    }

    public crear(equipo:Equipo){
        return this.http.doPost<Equipo, Respuesta<number>>(`${environment.endpoint}/equipos`, equipo);
    }

    public actualizar(equipo: Equipo){
        return this.http.doPut<Equipo, boolean>(`${environment.endpoint}/equipos/${equipo.id}`, equipo, this.http.optsName('actualizar equipos'));
    }
    
    public eliminar(equipo: Equipo){
        return this.http.doDelete<boolean>(`${environment.endpoint}/equipos/${equipo.id}`)
    }

    initializeFormGroup() {
        this.form.setValue({
          id: '',
          serial: '',
          marca: '',
          disponible: true,
          tipoEquipo: 'Básico'
        });
    }
}