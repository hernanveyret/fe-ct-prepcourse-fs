function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let indice = Math.random();
   let i = Math.ceil(indice)
   return array[i]
}
// volver a hacer
module.exports = obtenerElementoAleatorio;
