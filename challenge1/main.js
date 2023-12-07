let words = document.querySelector(".words");
let numberWords = document.querySelector(".numberWords");

function countWords(message) {
  message = "There is no war in Ba Sing Se";
  words = message.split(" ");
  return words.length;
}
numberWords = countWords(words);
console.log(`Le message contient ${numberWords} mots.`);
