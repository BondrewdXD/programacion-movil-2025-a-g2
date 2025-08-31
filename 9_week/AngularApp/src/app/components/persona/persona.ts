export class Usuario {
    nombre: string;
    apellido: string;
    edad: number;
    correoElectronico: string;
  
    constructor(nombre: string, apellido: string, edad: number, correoElectronico: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.correoElectronico = correoElectronico;
    }
  }
  