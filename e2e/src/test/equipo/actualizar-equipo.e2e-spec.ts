import { MenuPage } from '../../page/menu/menu.po';
import { AppPage } from '../../app.po';
import { NavbarPage } from '../../page/navbar/navbar.po';
import { ActualizarEquipoPage } from '../../page/equipo/actualizar-equipo/actualizar-equipo.po';
import { ListarEquiposPage } from '../../page/equipo/listar-equipo/listar-equipo.po';

describe('Actualizar equipos', () => {

    let page: AppPage;
    let navbar: NavbarPage;
    let menu: MenuPage;
    let actualizarEquipo: ActualizarEquipoPage;
    let listarEquipos: ListarEquiposPage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        menu = new MenuPage();
        actualizarEquipo = new ActualizarEquipoPage();
        listarEquipos = new ListarEquiposPage();
    });

    it('deberia mostrar la pagina actual', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();

        await menu.clickMenuListarEquipos();
        await listarEquipos.clickBotonEditar();

        expect(navbar.obtenerPaginaActual()).toBe('Equipos');
    });

    it('deberia actualizar equipos', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();
        await menu.clickMenuListarEquipos();
        await listarEquipos.clickBotonEditar();

        await actualizarEquipo.asignarInputMarca('Lenovo');
        await actualizarEquipo.asignarInputSerial('Sn2365');
        await actualizarEquipo.clickBotonActualizar();
        const alerta = await actualizarEquipo.obtenerTextoMensaje();
        
        expect(alerta).toEqual('Equipo ha sido actualizado');
    });

});