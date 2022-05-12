import { by, element } from "protractor";

export class ListarEquiposPage{
    listaEquipos = element.all(by.id('listaEquipos'));
    botonEditar = element(by.id('botonEditar'));
    botonEliminar = element(by.id('botonEliminar'));
    private mensaje = element(by.className('swal2-title'));

    async contarEquipos() {
        console.log((await this.listaEquipos).length);
        return this.listaEquipos.count();
    }

    async clickBotonEditar(){
        await this.botonEditar.click();
    }
    
    async clickBotonEliminar(){
        await this.botonEliminar.click();
    }

    async obtenerTextoMensaje(): Promise<string> {
        return await this.mensaje.getText();
    }
}