import { by, element } from 'protractor';

export class NavbarPage {
    private paginaActual = element(by.id('paginaActual'));

    async obtenerPaginaActual(){
        return this.paginaActual.getText();
    }
}
