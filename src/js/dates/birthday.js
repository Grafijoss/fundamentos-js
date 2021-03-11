function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24;
  const unAnio = unDia * 360;

  // Math.abs comvierte un numero negativo a positivo
  // si espositivo lo deja como esta
  const diferencia = Math.abs(fecha1 - fecha2);
  // nos va a resopnder un numero en milisegundos

  return {
    anios: Math.floor(diferencia / unAnio),
    dias: Math.floor(diferencia / unDia)
  };
}

const hoy = new Date();
// recibe año + mes + dia
const nacimiento = new Date(1983, 5, 20);

// el calculo se hace igual en lcualquiero orden
// hoy, nacimiento || nacimiento, hoy
console.log("dias", diasEntreFechas(hoy, nacimiento).dias);
console.log("años", diasEntreFechas(hoy, nacimiento).anios);
