import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../../shared/model/prestamo';
import { PrestamoService } from '../../shared/service/prestamo.service';
import { MensajesService } from '../../../../core/services/mensajes.service';
@Component({
  selector: 'app-listar-prestamo',
  templateUrl: './listar-prestamo.component.html',
  styleUrls: ['./listar-prestamo.component.css']
})
export class ListarPrestamoComponent implements OnInit {

  prestamos: Observable<Prestamo[]>;
  displayedColumns: string[]=['id', 'identificacionUsuario', 'idEquipo', 'fechaPrestamo', 'numeroDias', 'total', 'estado', 'acciones'];

  constructor(
    private prestamoService: PrestamoService,
    private mensajeService: MensajesService
  ) { }

  ngOnInit(): void {
    this.obtenerPrestamos();
  }

  obtenerPrestamos(){
    this.prestamos=this.prestamoService.consultar();
  }

  finalizarPrestamo(prestamo:Prestamo){
    this.prestamoService.finalizar(prestamo).subscribe(
      ()=>{
        this.mensajeService.exitoso('Préstamo finalizado con éxito.','')
      }
    );
  }
}