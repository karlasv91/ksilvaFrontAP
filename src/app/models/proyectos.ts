export class Proyectos{
    id?: number;
    titulo!: string;
    texto!: string;

    constructor(titulo:string, texto:string){
        this.titulo = titulo;
        this.texto = texto;

    }


}