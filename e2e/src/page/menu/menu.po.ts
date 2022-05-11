import { element, by } from 'protractor';

export class MenuPage{
    menu = element(by.id('menu'));
    menuPrestamo = element(by.id('menuPrestamo'));
    menuEquipo = element(by.id('menuEquipo'));
    menuRegistrarPrestamo = element(by.id('menuRegistrarPrestamo'));
    menuConsultarPrestamos = element(by.id('menuConsultarPrestamos'));
    menuRegistrarEquipo= element(by.id('menuRegistrarEquipo'));
    menuListarEquipos = element(by.id('menuListarEquipos'))

    async clickMenu() {
        await this.menu.click();
    }

    async clickMenuPrestamo(){
        await this.menuPrestamo.click();
    }

    async clickMenuRegistrarPrestamo(){
        await this.menuRegistrarPrestamo.click();
    }

    async clickMenuConsultarPrestamos(){
        await this.menuConsultarPrestamos.click();
    }

    async clickMenuEquipo(){
        await this.menuEquipo.click();
    }

    async clickMenuRegistrarEquipo(){
        await this.menuRegistrarEquipo.click();
    } 

    async clickMenuListarEquipos(){
        await this.menuListarEquipos.click();
    }
}