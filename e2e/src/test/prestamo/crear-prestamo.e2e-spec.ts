import { MenuPage } from '../../page/menu/menu.po';
import { AppPage } from '../../app.po';
import { NavbarPage } from '../../page/navbar/navbar.po';
import { CrearPrestamoPage } from '../../page/prestamo/crear-prestamo/crear-prestamo.po';

describe('workspace-project Prestamo', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let menu: MenuPage;
    let crearPrestamo: CrearPrestamoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        menu= new MenuPage();
        crearPrestamo = new CrearPrestamoPage();
    });

    it('deberia mostrar la pagina actual', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuPrestamo();

        await menu.clickMenuRegistrarPrestamo();

        expect(navBar.obtenerPaginaActual()).toBe('Prestamos');
    });

    it('Deberia crear el prestamo', async () => {
        const IDENTIFICACION_USUARIO_PRESTAMO = Math.random().toString(36).slice(-8);
        

        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuPrestamo();
        await menu.clickMenuRegistrarPrestamo();
        await crearPrestamo.asignarInputIdentificacionUsuario(IDENTIFICACION_USUARIO_PRESTAMO);
        await crearPrestamo.asignarInputTextoIdEquipo(25);
        await crearPrestamo.asignarInputTextoNumeroDias(5);
        
        await crearPrestamo.clickBotonCrearPrestamo();
        const alerta = await crearPrestamo.obtenerTextoMensaje();
        
        expect(alerta).toEqual('Prestamo creado');
    });
});