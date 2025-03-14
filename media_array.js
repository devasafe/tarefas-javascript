function media(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
  }
  let media = soma / numeros.length;
  return Math.round(media);
}

console.log(media([15, 25, 35]));
