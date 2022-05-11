import { element, by } from 'protractor';
export class ListarPrestamoPage{

    listaPrestamo = element.all(by.id('listaPrestamos'));

    async contarOrdenes() {
        return this.listaPrestamo.count();
    }

}