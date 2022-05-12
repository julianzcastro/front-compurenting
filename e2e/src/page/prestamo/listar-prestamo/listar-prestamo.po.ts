import { element, by } from 'protractor';
export class ListarPrestamoPage{

    listaPrestamo = element.all(by.id('listaPrestamos'));
    botonFinalizar = element(by.id('botonFinalizar'));
    private mensaje = element(by.className('swal2-title'));
    
    async contarPrestamos() {
        return this.listaPrestamo.count();
    }

    async clickBotonFinalizar(){
        await this.botonFinalizar.click();
    }

    async obtenerTextoMensaje(): Promise<string> {
        return await this.mensaje.getText();
    }

}