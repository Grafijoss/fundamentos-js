import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// const suma = (a, b) => a + b;

// console.log("prueba");
// console.log(suma(2, 3));

// PROTOTIPOS HERENCIA

function heredaDe(prototipoHijo, prototipoPadre) {
  // vamos a asignarle un prototipo a prototipoHijo
  const fn = function () {};
  // todas las funcines tienen
  // le asignamos al prototipo de fn el prototipo de prototipoPadre
  fn.prototype = prototipoPadre.prototype;

  // para no pisar el prototype del padre
  prototipoHijo.prototype = new fn();

  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
};

Persona.prototype.saluda = function () {
  console.log(`Hola ${this.nombre} ${this.apellido}`);
};

function Desarrollador(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saluda = function () {
  console.log(`Hola ${this.nombre} ${this.apellido} y soy un desarrollador`);
};

const josePersona = new Persona("Jose", "Montenegro", 1.69);

// josePersona.saluda();
// console.log(josePersona.soyAlto());

const joseDesarrollador = new Desarrollador("Jose Eduardo", "Montenegro", 1.9);
joseDesarrollador.saluda();

console.log(joseDesarrollador.soyAlto());
console.log(joseDesarrollador.altura);
