function crearSaludo(finalFrase) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${finalFrase}`)
  }
}

const saludoColombiano = crearSaludo('parce');
const saludoChileno = crearSaludo('cachay');
const saludoMexicano = crearSaludo('guey');

saludoColombiano('jose')
saludoChileno('jose')
saludoMexicano('jose')

