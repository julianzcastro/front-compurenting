export class Prestamo{
    id:number;
    identificacionUsuario: string;
    idEquipo: number;
    numeroDias: number;

    constructor(id:number, identificacionUsuario:string, idEquipo:number, numeroDias:number){
        this.id=id;
        this.identificacionUsuario=identificacionUsuario;
        this.idEquipo=idEquipo;
        this.numeroDias=numeroDias;
    }
}