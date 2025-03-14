function maior(numeros) {
  let maiore = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiore) {
      maiore = numeros[i];
    }
  }
  return maiore;
}
console.log(maior([11, 5, 511, 12, 30]));

/* outra forma mais simples usando math.max pra ver o maior,
porem nao funciona direto na array, ai tem que adicionar o 
"..." (famoso spread) para transforma-los em numeros 
separados

*/
function maxx(numeros) {
  return Math.max(...numeros);
}

console.log(maxx([199, 5, 8, 12, 30]));
