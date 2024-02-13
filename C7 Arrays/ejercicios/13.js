function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let soloPares = array.filter(e => e % 2 === 0);
  return soloPares
}

module.exports = filtrarNumerosPares;
