function paresQuadrado(...numeros) {
  let par = numeros.filter((num) => num % 2 === 0);
  let quadrado = par.map((pares) => pares * pares);
  return quadrado;
}

console.log(paresQuadrado(1, 2, 3, 4, 5, 6));
