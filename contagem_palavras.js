function contagem(texto) {
  if (typeof texto === "string") {
    let palavras = texto.split(" ");
    return palavras.length;
  } else {
    return 0;
  }
}

console.log(contagem(""));
