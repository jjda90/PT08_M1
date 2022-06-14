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

function DecimalABinario(num) {
  // tu codigo aca
  
  var q = num;
  var r;
  var arr = []
  while (q > 0) { 
  r = q%2
  q = Math.floor (q/2)
  arr.unshift(r);
  // console.log(q);
  console.log(r);
  }
  return arr.join('');


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}