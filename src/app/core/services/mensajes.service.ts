import {Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class MensajesService{
    exitoso(titulo: string, texto: string): void {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: 'success',
            timer: 1500,
            timerProgressBar: false,
            position: 'bottom' ,
            showConfirmButton: false
        });
    }


    error(titulo: string, texto: string): void {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: 'error',
            position: 'center',
            confirmButtonColor: '#ff00ff80'
        });
    }

}