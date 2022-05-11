import { MenuPage } from '../../page/menu/menu.po';
import { CrearEquipoPage } from '../../page/equipo/crear-equipo/crear-equipo.po';
import { AppPage } from '../../app.po';
import { NavbarPage } from '../../page/navbar/navbar.po';

describe('workspace-project Equipo', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let menu: MenuPage;
    let crearEquipo: CrearEquipoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        menu= new MenuPage();
        crearEquipo = new CrearEquipoPage();
    });

    it('deberia mostrar la pagina actual', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();

        await menu.clickMenuRegistrarEquipo();

        expect(navBar.obtenerPaginaActual()).toBe('Equipos');
    });

    it('Deberia crear el equipo', async () => {
        const SERIAL_EQUIPO = Math.random().toString(36).slice(-8);
        const MARCA_EQUIPO = 'Dell';

        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();
        await menu.clickMenuRegistrarEquipo();
        await crearEquipo.asignarInputSerial(SERIAL_EQUIPO);
        await crearEquipo.asignarInputMarca(MARCA_EQUIPO);
        await crearEquipo.clickSelectDisponibleSi();
        await crearEquipo.clickSelectTipoEquipoBasico();

        await crearEquipo.clickBotonCrearEquipo();
        const alerta = await crearEquipo.obtenerTextoMensaje();

        expect(alerta).toEqual('Equipo creado');
        expect(crearEquipo.obtenerTextoInputSerial()).toBe('');
        expect(crearEquipo.obtenerTextoInputMarca()).toBe('');
        expect(crearEquipo.obtenerTextSelectDisponible()).toBe('Si');
        expect(crearEquipo.obtenerTextSelectTipoEquipo()).toBe('Básico');
    });
});