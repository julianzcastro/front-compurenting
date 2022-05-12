import { MenuPage } from '../../page/menu/menu.po';
import { AppPage } from '../../app.po';
import { NavbarPage } from '../../page/navbar/navbar.po';
import { ListarPrestamoPage } from '../../page/prestamo/listar-prestamo/listar-prestamo.po';

describe('Listar prestamos', () => {

    let page: AppPage;
    let navbar: NavbarPage;
    let menu: MenuPage;
    let listarPrestamos: ListarPrestamoPage;

    beforeEach(() => {
        page = new AppPage();
        navbar = new NavbarPage();
        menu = new MenuPage();
        listarPrestamos = new ListarPrestamoPage();
    });

    it('deberia mostrar la pagina actual', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuPrestamo();

        await menu.clickMenuConsultarPrestamos();

        expect(navbar.obtenerPaginaActual()).toBe('Prestamos');
    });

    it('deberia listar prestamos', async () => {
        
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuPrestamo();
        await menu.clickMenuConsultarPrestamos();

        expect(listarPrestamos.contarPrestamos()).toBe(1);
    });


    it('deberia finalizar un prestamo', async () => {
        await page.navigateTo();
        await menu.clickMenu();
        await menu.clickMenuPrestamo();
        await menu.clickMenuConsultarPrestamos();

        await listarPrestamos.clickBotonFinalizar();
        const alerta = await listarPrestamos.obtenerTextoMensaje();

        expect(alerta).toEqual('Préstamo finalizado con éxito.');
    });

});