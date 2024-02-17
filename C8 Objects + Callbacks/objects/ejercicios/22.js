function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

   if ( str1.length != str2.length ) {
      return false
   }
   if (str1 === '' || str2 === ''){
      return true
   }

   let mayor = "";
   let menor = "";
   if ( str1.length > str2.length){
      mayor = str1
      menor = str2
   }else {
      mayor = str2
      menor = str1
   }

   
let strArr1 = mayor.split('')
let strArr2 = menor.split('')

for( let i = 0; i < strArr1.length; i++ ){
    return strArr1.includes(strArr2[i])
}


}

module.exports = esAnagrama;
