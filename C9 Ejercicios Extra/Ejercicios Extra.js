/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  const arr = [];
  let prop = Object.keys(objeto);
  let valor = Object.values(objeto);
  for ( let i = 0; i < prop.length; i++){
   arr.push([prop[i],valor[i]])
  }
    return arr
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  string = string.split('').sort().join('')
  let obj = {}
  for ( let i = 0; i < string.length; i++ ){      
      if(obj[string[i]]){
        obj[string[i]]++
      }else{
        obj[string[i]] = 1
      }
  }
  return obj
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let str = string.split('')
  let up = str.filter(e => e === e.toUpperCase())
  let down = str.filter(e => e != e.toUpperCase())
  let arr = up.concat(down).join('')
  return arr
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arr = frase.split(' ')
  let arr3=arr.map(e => e.split('').reverse().join(''))
  return arr3.join(' ')
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let str = numero.toString().split('').reverse().join('')
  num = parseFloat(str)
  if(num == numero){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let strArr = string.split('');
  string = strArr.filter(e => e != 'a' && e != 'b' && e != 'c')
  return string.join('')
  
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let subIndice;
   for ( let i=0; i < arrayOfStrings.length-1; i++) {
       for (let b = i+1; b < arrayOfStrings.length; b++){
           if (arrayOfStrings[i].length > arrayOfStrings[b].length){
                   subIndice = arrayOfStrings[i];
                   arrayOfStrings[i] = arrayOfStrings[b];
                   arrayOfStrings[b] = subIndice; 
           }
       }
  }            
       return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  if ( array1 > array2 ){
    let iguales = array1.filter(e => array2.includes(e))
    return iguales    
      }else {
        let iguales = array2.filter(e => array1.includes(e))
    return iguales
      }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
