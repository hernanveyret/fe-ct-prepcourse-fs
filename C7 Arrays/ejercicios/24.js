function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  let conteo=0;
  let nuevoValor = []
  do{
    conteo++;
    if(conteo === 5 ){
      continue
    }
    nuevoValor.push(num=num+2)
  }while(conteo < 10 ){
    return nuevoValor
  }
}

module.exports = continueStatement;
