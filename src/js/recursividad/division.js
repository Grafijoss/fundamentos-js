// el ultimo resultado de uan funcion recursiva
// es el caso base

function divisionEntera(dividendo, divisor) {
  // caso base
  if (dividendo < divisor) {
    // este resultado se suma
    // al resultado de la division
    return 0;
  }

  // dividendo - divisor  1++
  // divideondo = dividendo - divisor

  console.log("divisionEntera", dividendo);

  return 1 + divisionEntera(dividendo - divisor, divisor);
}

console.log(divisionEntera(20, 5));
