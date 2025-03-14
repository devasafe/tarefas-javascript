function vogal(texto) {
  let vogais = ["a", "e", "i", "o", "u"];
  let text = texto.toLowerCase();
  let contagem = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(text[i])) {
      contagem += 1;
    }
  }
  return contagem;
}

console.log(vogal("sirAAAAta"));
