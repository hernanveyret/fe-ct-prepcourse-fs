function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  let cant = array.filter(e => e > 10)
  return cant.length
}

module.exports = contarElementosMayoresA10;
