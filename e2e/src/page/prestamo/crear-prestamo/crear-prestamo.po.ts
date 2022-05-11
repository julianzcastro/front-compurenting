import { by, element } from "protractor";
export class CrearPrestamoPage{
    private inputIdentificacionUsuario = element(by.id('identificacionUsuario'));
    private inputIdEquipo = element(by.id('idEquipo'));
    private inputNumeroDias = element(by.id('numeroDias'));
    private botonCrearPrestamo = element(by.id('crearPrestamo'));
    private mensaje = element(by.className('swal2-title'));

    async obtenerTextoIdentificacionUsuario(){
        return this.inputIdentificacionUsuario.getText();
    }

    async asignarInputIdentificacionUsuario(identificacionUsuario:string){
        await this.inputIdentificacionUsuario.clear();
        await this.inputIdentificacionUsuario.sendKeys(identificacionUsuario);
    }
    
    async obtenerTextoIdEquipo(){
        return this.inputIdEquipo.getText();
    }

    async asignarInputTextoIdEquipo(idEquipo:number){
        await this.inputIdEquipo.clear();
        await this.inputIdEquipo.sendKeys(idEquipo)
    }

    async obtenerTextoNumeroDias(){
        return this.inputNumeroDias.getText();
    }

    async asignarInputTextoNumeroDias(numeroDias){
        await this.inputNumeroDias.clear();
        await this.inputNumeroDias.sendKeys(numeroDias);
    }

    async clickBotonCrearPrestamo(){
        await this.botonCrearPrestamo.click();
    }

    async obtenerTextoMensaje(): Promise<string> {
        return await this.mensaje.getText();
    }

}