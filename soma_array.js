function soma(valores) {
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    total = total + valores[i];
  }
  return total;
}

console.log(soma([1, 2, 3, 4, 5]));
