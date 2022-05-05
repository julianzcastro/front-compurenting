export class Equipo{
    id: number;
    serial: string;
    marca: string;
    disponible: boolean;
    tipoEquipo:string;

    constructor(id:number, serial: string, marca:string, disponible:boolean, tipoEquipo:string){
        this.id=id;
        this.serial=serial;
        this.marca=marca;
        this.disponible=disponible;
        this.tipoEquipo=tipoEquipo;
    }
}