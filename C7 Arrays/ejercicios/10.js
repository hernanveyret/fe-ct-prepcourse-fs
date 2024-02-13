function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
 
  let str = [];

  for ( let i = 0; i < array.length; i++ ){
   if( array[i].length > 5) {
     str.push(array[i])
      return str
         break
   }else {
    return undefined
   }  
}
}
// revisar
module.exports = obtenerPrimerStringLargo;
