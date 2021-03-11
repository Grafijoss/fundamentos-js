// !6 = 6 * 5 * 4 * 3 * 2 * 1

function factorial(n) {
  if (n === 1) {
    // se multiplica con los resultados de recursividad
    // cuando entra al caso base termina la recursividad
    return 1;
  }

  // 6*5=35
  // return n * factorial(n - 1);
  // return 6 * factorial(5);
  // return 30 * factorial(4);
  // return 120 * factorial(3);
  // return 360 * factorial(2);
  // return 720 * factorial(1);

  return n * factorial(n - 1); // 5 - 4 - 3 ...
  // n = 6 * n = 5 * n = 4 * n = 3 * n = 2 * factorial(n = 2 - 1)
}

function contador(num) {
  if (num === 10) {
    return 10;
  }

  return contador(num + 1);
}

function factorialWithCache(n) {
  if (!this.cache) {
    this.cache = {};
  }

  if (this.cache[n]) {
    return this.cache[n];
  }

  if (n === 1) {
    return 1;
  }

  this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}

console.log("factorial", factorial(6));

console.log("contador", contador(0));
