import { MenuPage } from '../../page/menu/menu.po';
import { AppPage } from '../../app.po';
import { NavbarPage } from '../../page/navbar/navbar.po';
import { ListarEquiposPage } from '../../page/equipo/listar-equipo/listar-equipo.po';

describe('Listar equipos', () => {

    let page: AppPage;
    let navbar: NavbarPage;
    let menu: MenuPage;
    let listarEquipos: ListarEquiposPage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        menu = new MenuPage();
        listarEquipos = new ListarEquiposPage();
    });

    it('deberia mostrar la pagina actual', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();

        await menu.clickMenuListarEquipos();
        
        expect(navbar.obtenerPaginaActual()).toBe('Equipos');
    });

    it('deberia listar equipos', async () => {
        
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();
        await menu.clickMenuListarEquipos();

        expect(listarEquipos.contarEquipos()).toBe(0);
    });


    it('deberia eliminar un equipo', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuEquipo();
        await menu.clickMenuListarEquipos();
        await listarEquipos.clickBotonEliminar();

        const alerta = await listarEquipos.obtenerTextoMensaje();
        
        expect(alerta).toEqual('Equipo ha sido eliminado');
    });

});