function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
/*
  let nuevaFecha = new Date(fecha);
  if ( nuevaFecha.toDateString() === "Invalid Date" ){
    return false
  }else{
    return true
  }
  */
 if ( fecha instanceof Date && !isNaN(fecha.getTime())){
  return true
 }else{
  return false
 }
}

module.exports = esFechaValida;