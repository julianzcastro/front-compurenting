import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../../shared/model/equipo';
import { EquipoService } from '../../shared/service/equipo.service';



@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {

  equipos: Observable<Equipo[]>;
  dataSource = [];
  displayedColumns: string[]=['id', 'serial', 'marca', 'disponible', 'tipoEquipo', 'acciones'];

  constructor(
    private equipoService: EquipoService
  ) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos(){
    this.equipos=this.equipoService.obtener();
    console.log(this.equipos[0]);
  }

}
