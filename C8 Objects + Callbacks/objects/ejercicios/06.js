const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  
  /*
  Opcion 1
  let cantidadPropiedades = Object.keys(objeto)
  return cantidadPropiedades.length
  */

  // Opcion 2
 let cantidadPropiedades = []
 for ( let i in objeto ){
  cantidadPropiedades.push(objeto[i])
 }
 return cantidadPropiedades.length
  
};

module.exports = contarPropiedades;
