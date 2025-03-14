function inverter(texto) {
  if (typeof texto === "string") {
    let palavras = texto.split(" ").reverse().join(" ");
    return palavras;
  } else {
    return "";
  }
}

console.log(inverter(23));
