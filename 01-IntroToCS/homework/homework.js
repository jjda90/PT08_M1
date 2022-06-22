'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  let func = n => Number(n);
  var arr = Array.from (String(num) , func );
  var num2 = 0;
  var l = arr.length

  for (var i=0; i< l; i++) {
    num2 = num2 + arr[l-1-i] * 2 ** i;    
  }
  return num2;
}

/* OTRA FORMA:
recorremos directamente el string 

function BinarioADecimal(num) {
  // tu codigo aca

  var num2 = 0;
  var l = num.length

  for (var i=0; i< l; i++) {
    num2 = num2 + num[l-1-i] * 2 ** i;    
  }
  return num2;
}



//////////
o usamos funcion que transforma directamente de binario a decimal:

function BinarioADecimal(num) {
return parseInt (num,2);
}


*/







function DecimalABinario(num) {
  // tu codigo aca
  
  var q = num;
  var r;
  var arr = []
  while (q > 0) { 
  r = q%2
  q = Math.floor (q/2)
  arr.unshift(r);
  }
  return arr.join('');
}

/* OTRA FORMA

USO EL STRING Y %

function DecimalABinario(num) {
  // tu codigo aca
  var binario = "" 
  var arr = []
  while (num > 0) { 
  binario = binario + num%2   // saca el resto de num/2
  num = Math.floor (num/2)
  
  }
  return binario;
}


/////////

sino directamente pasamo a string en base 2
num.toString(2)  // si no especifico la base, es base 10 -> devuelve un numero decimal en string



*/







module.exports = {
  BinarioADecimal,
  DecimalABinario,
}