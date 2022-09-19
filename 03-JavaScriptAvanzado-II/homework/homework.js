"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const contador1 = counter()
  contador1()     // 1
  contador1()     // 2
  contador1()     // 3

  const contador2 = counter()
  contador2()      // 1
  contador2()      // 2
  contador2()      // 3
   */
  var contador = 1 ;
  
  return function() {
    return contador++;
  }

}   // entonces si hago nuevoContador = counter() y despues ejecuto nuevoContador() --> el resultado se va a ir incrementando en uno






function cacheFunction(cb) {
  /*
  Ejercicio 2

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su vafaclor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */

  var cache = {};

  return function (x) {
    if(cache.hasOwnProperty(x)) {     // dentro del objeto cache, hay una propiedad x ?
      return cache [x];               // devuelvo el valor ya guardado previamente en caché
    }  
    var resultado = cb(x);            // como no lo tengo guardado, uso la funcion
    cache[x] = resultado;             // crea el par key-value en el objeto para el futuro
    return resultado;
  }


}

// Bind  --> metodo de funciones (o funcion de funcion)  (no de array ni de objects) --> apunta el this al objeto que  queremos

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {    // esta funcion esta en el contexto global
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);   // this hace ref al obj instructor
let getNombreAlumno = getNombre.bind(alumno);           // this hace ref al obj alumno

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(this, '*', '*')  // el primer parametro de bind es this, despues van los args 
let textoGuiones = crearCadena.bind(this, '-', '-')
let textoUnderscore = crearCadena.bind(this, '_', '_')

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
