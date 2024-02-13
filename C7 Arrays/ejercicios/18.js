function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
 let cant = resultadosTest.length
  let suma = resultadosTest.reduce((a,b) => a + b )

  return suma / cant
}

module.exports = promedioResultadosTest;
