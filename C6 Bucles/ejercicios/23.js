function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  
  let conteo = 0;
  do {
    conteo++
    num = num + 5
  }while(conteo < 8)
  return num
}
// volver  a hacer

module.exports = doWhile;