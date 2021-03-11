const jose = {
  nombre: "Jose",
  apellido: "Montenegro"
};

const juan = {
  nombre: "Juan",
  apellido: "Montenegro"
};

const july = {
  nombre: "Juliana",
  apellido: "Montenegro"
};

const negro = {
  nombre: "Jorge",
  apellido: "Montenegro"
};

const mama = {
  nombre: "Alicia",
  apellido: "Garzon"
};

function saludar(saludo = "Oe") {
  console.log(this);
  console.log(`${saludo} mi nombre es ${this.nombre}`);
}

function saludarDestructuring({ saludo = "Oe" }) {
  console.log(this);
  console.log(`${saludo} mi nombre es ${this.nombre}`);
}

// BIND

const saludarBind = saludar.bind(jose);

saludarBind();
setTimeout(saludar.bind(juan, "whatsup"), 1000);

// CALL

saludar.call(july, "buenas noches");
saludarDestructuring.call(mama, { saludo: "buenas" });

// APPLY

saludar.apply(negro, ["good night"]);
