function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let indice = Math.random();
   let i = Math.round(indice)
   return array[i]
}

module.exports = obtenerElementoAleatorio;
