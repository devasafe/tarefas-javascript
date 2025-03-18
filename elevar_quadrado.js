function quadrado(...numero) {
  let calculo = numero.map((num) => num * num);
  return calculo;
}

console.log(quadrado(1, 2, 3, 4, 5, 6));
