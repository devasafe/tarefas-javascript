function maioresQueDez(...numero) {
  let calculo = numero.filter((num) => num > 10);
  return calculo;
}

console.log(maioresQueDez(5, 12, 8, 15, 356));
