export class Experiencia{
    id?: number;
    empresa!: string;
    fecha!: string;
    detalle!: string;

    constructor (empresa: string, fecha: string, detalle:string){
        this.empresa = empresa;
        this.fecha = fecha;
        this.detalle = detalle;

    }
}