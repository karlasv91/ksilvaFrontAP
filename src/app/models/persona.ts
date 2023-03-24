export class Persona{
    id?:number 
    nombre!: string
    apellido!: string
    profesion!: string

    constructor (nombre: string, apellido: string, profesion:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
    }
}