'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n===0 || n===1) {return 1};
  if (n < 0) {return 0};
  
  return n * nFactorial(n-1);
}




function nFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return nFibonacci(n-1) + nFibonacci(n-2);

}
//     nFibonacci(0) = 0
//     nFibonacci(1) = 1
//   nFibonacci(2) = nFibonacci(1) + nFibonacci(0) = 1 + 0 = 1
//   nFibonacci(3) = nFibonacci(2) + nFibonacci(1) --> 1 + 1 = 2
// nFibonacci(4) = nFibonacci(3) + nFibonacci(2) --> 2 + 1  = 3













/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {    // creo la class Queue
  this.array = [];   // agrego una propiedad arreglo en la clase para ir almacenenado la queue
}

// funciones en el prototype de Queue

Queue.prototype.size = function() {     
    return this.array.length;
}

Queue.prototype.enqueue = function(elem){
  return this.array.push(elem);
}
  
Queue.prototype.dequeue = function(){
  // if (this.array.length === 0) return undefined; --> no es necesario pq shift devuelve undefined por defecto
  return this.array.shift();
}


let q1 = new Queue();  // creo instancia q1 de class Queue

q1.size();      // me tira el size de la queue q1
q1.enqueue(88); // agrego el elemento 88
q1.enqueue(5);
q1.enqueue(11);
// ahora q1 deberia  ser [88,5,11]
q1.size() // -->3
q1.dequeue()    // remueve y devuelve primer elemento
// ahora q1 deberia  ser [5,11]
q1.size();  // --> 2

console.log(Queue.prototype);  // ----> me muestra los nombres de las funciones asociadas a la class Queue















// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
