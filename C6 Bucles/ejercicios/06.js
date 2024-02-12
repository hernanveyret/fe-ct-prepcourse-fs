function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

  let str = num.toString()
  if ( str.length === 3){
    return true
  }else {
    return false
  }
}

module.exports = tieneTresDigitos;
