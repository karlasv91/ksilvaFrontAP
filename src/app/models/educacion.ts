export class Educacion{
    id?: number;
    fundacion!: string;
    periodo!: string;
    resena!: string;

    constructor(fundacion:string, periodo:string, resena:string){
        this.fundacion = fundacion;
        this.periodo = periodo;
        this.resena = resena;
    }

}