
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```



```javascript
console.log(bar); // undefined sube la declaracion var bar sin valor definido (Hoisting)
console.log(baz); // error, como no tiene la declaracion
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```



```javascript
var instructor = "Tony";  // la defino en el contexto global
if(true) {
    var instructor = "Franco";  //  la defino en el scope del if pero pisa a la del scope gral, 
   //                               si uso let, solo queda entre las llaves {} --> ALCANCE DE BLOQUE
}
console.log(instructor);
```



```javascript
var instructor = "Tony";
console.log(instructor);      // Tony
(function() {                 // IIFE
   if(true) {
      var instructor = "Franco";    // Franco  ---> esta reasignacion está dentro del contexto de la funcion, no sale al global ya que está redeclarada con var.
      console.log(instructor);
   }
})();
console.log(instructor);            // Tony
```



```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {                            // el if no crea un contexto de ejecucion nuevo !!
    var instructor = "The Flash";      
    let pm = "Reverse Flash";
    console.log(instructor);           // The Flash
    console.log(pm);                   // Reverse Flash
}
console.log(instructor);               // The Flash
console.log(pm);                       // Franco     --> ya que let se queda en el bloque de las  {} 
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);         // undefined, en la creation phase sube var a = undefined
   console.log(foo());     // 2 , en la creation phase sube la definicion de la funcion foo

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';  // sube el var snack = undefined en el contexto de ejecucion por eso me da undefined mas abajo 
        return snack;
    }
    return snack;   // undefined
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());  // Aurelio De Rosa  --> this apunta a obj.prop

var test = obj.prop.getFullname;

console.log(test());                // Juan Perez -->  this apunta al contexto global!
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();  // 1 4 3 2 
```
