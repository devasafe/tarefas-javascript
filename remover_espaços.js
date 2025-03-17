function removerEspaço(texto) {
  let textoSeparado = texto.split(" ");
  let textoJunto = textoSeparado.join("");
  let minuscula = textoJunto.toLowerCase(textoJunto);
  return minuscula;
}

console.log(removerEspaço("Tropa do bigode"));
