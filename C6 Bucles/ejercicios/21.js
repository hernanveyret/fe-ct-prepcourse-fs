function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  //return (Math.log2(numero) % 1 === 0);

  if (numero <= 0) {
    return false;
}

let potencia = 1;
while (potencia < numero) {
    potencia *= 2;
}

return potencia === numero;
}


module.exports = esPotenciaDeDos;
