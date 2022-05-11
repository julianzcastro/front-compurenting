import { by, element } from "protractor";

export class ActualizarEquipoPage{
    private inputSerial = element(by.id('serial'));
    private inputMarca = element(by.id('marca'));
    private selectDisponibleSi = element(by.cssContainingText("option","Si"));
    private selectDisponibleNo = element(by.cssContainingText("option", "No"));
    private mensaje = element(by.className('swal2-title'));

    async obtenerTextoInputSerial(){
        return this.inputSerial.getText();
    }

    async asignarInputSerial(serial: string){
        await this.inputSerial.clear();
        await this.inputSerial.sendKeys(serial);
    }

    async obtenerTextoInputMarca(){
        return this.inputMarca.getText();
    }

    async asignarInputMarca(marca:string){
        await this.inputMarca.clear();
        await this.inputMarca.sendKeys(marca);
    }

    async clickSelectDisponibleSi(){
        await this.selectDisponibleSi.click();
    }

    async clickSelectDisponibleNo(){
        await this.selectDisponibleNo.click();
    }

    async obtenerTextoMensaje(): Promise<string> {
        return await this.mensaje.getText();
    }
}