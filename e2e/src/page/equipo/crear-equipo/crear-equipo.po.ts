import { element, by } from 'protractor';
export class CrearEquipoPage{
    private inputSerial = element(by.id('serial'));
    private inputMarca = element(by.id('marca'));
    private selectDisponibleSi = element(by.xpath('html/body/app-root/app-equipo/app-crear-equipo/div/section/form/div/div[3]/p/span/select/option[1]'));
    private selectDisponibleNo = element(by.xpath('html/body/app-root/app-equipo/app-crear-equipo/div/section/form/div/div[3]/p/span/select/option[2]'));
    private selectTipoEquipoBasico = element(by.xpath('html/body/app-root/app-equipo/app-crear-equipo/div/section/form/div/div[4]/p/span[1]/select/option[1]'));
    private selectTipoEquipoGamer = element(by.xpath('html/body/app-root/app-equipo/app-crear-equipo/div/section/form/div/div[4]/p/span[1]/select/option[2]'));
    private selectTipoEquipo= element(by.css('#selectTipoEquipo option[selected]'));
    private selectDisponible= element(by.css('#selectDisponible option[selected]'));
    private mensaje = element(by.className('swal2-title'));
    private botonCrearEquipo = element(by.id('crearEquipo'))

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

    async clickSelectTipoEquipoBasico(){
        await this.selectTipoEquipoBasico.click();
    }

    async clickSelectTipoEquipoGamer(){
        await this.selectTipoEquipoGamer.click();
    }

    async obtenerTextSelectTipoEquipo(){
        return this.selectTipoEquipo.getText();
    }

    async obtenerTextSelectDisponible(){
        return this.selectDisponible.getText();
    }

    async obtenerTextoMensaje(): Promise<string> {
        return await this.mensaje.getText();
    }

    async clickBotonCrearEquipo(){
        await this.botonCrearEquipo.click();
    }
}