function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let multi = []

  for ( let i=0; i<array.length;i++){
    multi.push(array[i] * i)
  }

  return multi
}

module.exports = multiplicarElementosPorIndice;
