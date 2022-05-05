export class Prestamo{
    identificacionUsuario: string;
    idEquipo: number;
    numeroDias: number;

    constructor(identificacionUsuario:string, idEquipo:number, numeroDias:number){
        this.identificacionUsuario=identificacionUsuario;
        this.idEquipo=idEquipo;
        this.numeroDias=numeroDias;
    }
}