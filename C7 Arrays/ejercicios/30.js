function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let repetidos = [];

  for (let i = 0; i < numeros.length; i++) {
    if (repetidos.includes(numeros[i])) { 
      return numeros[i]; 
    } else {
      repetidos.push(numeros[i]); 
    }
  }
}

module.exports = encontrarElementoRepetido;