function criptografia(str, number) {
  number = number % 26;
  let lowerCase = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let result = "";

  for (let i = 0; i < lowerCase.length; i++) {
    let currentLetter = lowerCase[i];
    if (currentLetter === " ") {
      result += currentLetter;
      continue;
    }

    let index = alphabet.indexOf(currentLetter);
    let newIndex = index + number;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex += 26;
    }
    if (str[i] === str[i].toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    } else {
      result += alphabet[newIndex];
    }
  }
  return result;
}
// Para Criptografar, inserir uma uma frase e um número.
// console.log('Criptografia:', criptografia('Hello World', 3));


function decriptografia(str, number) {
  number = number % 26;

  let lowerCase = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < lowerCase.length; i++) {
    let currentLetter = lowerCase[i];
    if (currentLetter === " ") {
      result += currentLetter;
      continue;
    }

    let index = alphabet.indexOf(currentLetter);
    let newIndex = index - number;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex += 26;
    }
    if (str[i] === str[i].toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    } else {
      result += alphabet[newIndex];
    }
  }
  return result;
}
// Para descriptografar, inserir uma uma frase e um número.
// console.log('Decriptografia:', decriptografia('Khoor Zruog', 3));

