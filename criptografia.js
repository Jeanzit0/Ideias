const prompt = require('prompt-sync')();

// Mapeamento de letras para substituição
var substituicoes = {
  'a': 'j',
  'b': 'a',
  'c': 'd',
  'd': 'r',
  'e': 'v',
  'f': 'l',
  'g': 'g',
  'h': 'o',
  'i': 'm',
  'j': 's',
  'k': 't',
  'l': 'p',
  'm': 'h',
  'n': 'b',
  'o': 'x',
  'p': 'c',
  'q': 'v',
  'r': 'z',
  's': 'w',
  't': 'e',
  'u': 'f',
  'v': 'q',
  'w': 'i',
  'x': 'y',
  'y': 'n',
  'z': 'k',
  // adicione mais letras e substituições conforme necessário
};

// Solicita a frase ao usuário
var frase = prompt("Digite uma frase:");

// Função para substituir as letras na frase
function substituirLetras(frase) {
  var novaFrase = "";
  for (var i = 0; i < frase.length; i++) {
    var letra = frase[i].toLowerCase();
    if (letra in substituicoes) {
      novaFrase += substituicoes[letra];
    } else {
      novaFrase += frase[i];
    }
  }
  return novaFrase;
}

// Chama a função para substituir as letras
var novaFrase = substituirLetras(frase);

// Exibe a nova frase
console.log("Nova frase: " + novaFrase);
