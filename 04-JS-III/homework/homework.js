// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var largo = array.length;
  return array[largo-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var array = array;

  for (let i = 0 ; i < array.length ; i++ ){
    array[i] = array[i] + 1;
  }

  return array;
}



function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:


  if (palabras.length !== 1){
    var frase = "";
    var banderaInicio = true;

    for (let i = 0; i < palabras.length; i++){

      if (banderaInicio === true){  
      palabra = palabras[i];
      
      frase = frase + palabra + " ";

      banderaInicio = false

      }else if(banderaInicio === false){
      palabra = palabras[i];
      
      frase = frase + palabra;

      banderaInicio = 2
      }else if (banderaInicio === 2){
        palabra = palabras[i];
      
        frase = frase + " " + palabra;
      }
    }
    return frase;
  }else{
    var frase = palabras[0];
    return frase;
  }
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  var bandera = false;

  for (let i = 0; i < array.length; i++){
    if (array[i] == elemento){
      bandera = true
    }else{
      bandera = bandera
    }
  }

  return bandera;


}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (let i = 0; i < numeros.length ; i++){
    var elemento = numeros[i];
    suma = suma + elemento;

  }

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (let i = 0; i < resultadosTest.length ; i++){
    var elemento = resultadosTest[i];
    suma = suma + elemento;

  }

  return suma/(resultadosTest.length);
  
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:


  var numMay = undefined;

  for (let i = 0; i < numeros.length; i++){
    if (numMay === undefined){
      numMay = numeros[i];
    }else{
      if (numeros[i]>numMay){
          numMay = numeros[i]
      }else{
        numMay = numMay;
      }
    }
  }


  return numMay;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var array = Array.from(arguments)

  var producto = 0;
  var inicio = true;

  for (let i = 0 ; i < array.length; i++){
    if (array.length < 1){
      return 0;
    }else{
      if (array.length === 1){
        return array[0];
      }else{
        if(inicio === true){
          producto = array[i];
          inicio = false;
        }else{
          producto = producto * array[i];
        }
      }
    }
  }

  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;

  for (let i = 0;i < arreglo.length; i++){
    if (arreglo[i] > 18){
      contador++;
    }
  }

  return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia == 1 || numeroDeDia == 7){
    return "Es fin de semana";
  }else{
    return "Es dia Laboral"
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var n = n.toString()[0] === '9';
  return n;
}



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var soniguales = true;
  var primerElemento = undefined;

  for(let i = 0; i < arreglo.length; i++){
    if (arreglo.length !== 0){

      if (primerElemento === undefined){
        primerElemento = arreglo[i]
      }else{
        if (primerElemento !== arreglo[i]){
          soniguales = false;
        }
      }
    }else{
      soniguales = false;
    }
  }

  return soniguales;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var meses = []
  for (let i = 0;i < array.length;i++){
    if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
      meses.push(array[i]);
    }
  }
  var banderaE = false;
  var banderaM = false;
  var banderaN = false;

  for(let i = 0; i < meses.length; i++){
    if (meses[i] == "Enero"){
      banderaE = true;
    }else if(meses[i] == "Marzo"){
      banderaM = true;
    }else if(meses[i] == "Noviembre"){
      banderaN = true;
    }
  }


  
  if (banderaE == false || banderaM == false || banderaN == false){
    return "No se encontraron los meses pedidos"
  } else{
    return meses;
  }
  
  

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var mayCien = [];
  for (let i = 0;i<array.length; i++){
    if (array[i]>100){
      mayCien.push(array[i]);
    }
  }

  return mayCien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var aumento = numero;
  var arreglo = []
  for (let i = 0; i < 10; i++){
    if (i == aumento){
      return "Se interrumpió la ejecución"
    }else{
      aumento = aumento + 2
      arreglo.push(aumento);
    }
  }

  return arreglo;


}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var aumento = numero;
  var array = [];

  for (let i = 0; i < 10; i++){
    if (i!== 4){
      aumento = aumento + 2;
      array.push(aumento);
    }else{
      continue;
    }
  }

  return array;


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
