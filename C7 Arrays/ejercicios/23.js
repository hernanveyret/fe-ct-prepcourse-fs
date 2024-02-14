function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  let conteo=0;
  let nuevoValor = []
  do{
    conteo++;
    nuevoValor.push(num=num+2)
    if(num === conteo){
      return "Se interrumpió la ejecución";
      break
    }
  }while(conteo < 10 ){
    return nuevoValor
  }
}

module.exports = breakStatement;
