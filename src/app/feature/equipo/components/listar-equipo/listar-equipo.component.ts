import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../../shared/model/equipo';
import { EquipoService } from '../../shared/service/equipo.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActualizarEquipoComponent } from '../actualizar-equipo/actualizar-equipo.component';


@Component({
  selector: 'app-listar-equipo',
  templateUrl: './listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css']
})
export class ListarEquipoComponent implements OnInit {

  @Input() equipo:Equipo;

  equipos: Observable<Equipo[]>;
  displayedColumns: string[]=['id', 'serial', 'marca', 'disponible', 'tipoEquipo', 'acciones'];

  constructor(
    private equipoService: EquipoService,
    private dialogo: MatDialog

  ) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos(){
    this.equipos=this.equipoService.obtener();
  }

  eliminarEquipo(equipo:Equipo){
    this.equipoService.eliminar(equipo).subscribe(
      ()=>{
        this.obtenerEquipos();
      }
    )
  }

  onEdit(equipo: Equipo){
    this.equipoService.form.setValue(equipo);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialogo.open(ActualizarEquipoComponent, dialogConfig);
  }
}
