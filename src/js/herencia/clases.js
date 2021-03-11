class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saluda() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }

  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }

  saluda() {
    console.log(`Hola ${this.nombre} ${this.apellido} y soy desarrollador`);
  }
}

// const josePersona = new Persona("Jose", "Montenegro", 1.69);
// josePersona.saluda();

const joseDesarrollador = new Desarrollador("Jose", "Montenegro", 1.69);
joseDesarrollador.saluda();
