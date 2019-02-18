// all pokemon
// Blake
var Bitty = ["Bitty", "Mi, Mimi, Mimikyu, Kyu, Mikyu"];

// Dani
var Missy = ["Missy", "Misdreavus, Mis, Dreav, Dreavus, Misdrea, Vus"];
var Wally = ["Wally", "Spritzee, Sprit, Zee, Spri, Spritz"];

function pokemonOptionList() {
  // All
  var pokemonList = [];
  var pokeList = document.getElementById('pokeOptions');

  pokemonList.push(Bitty, Missy, Wally);

  for (var pokemonsInList = 0; pokemonsInList < pokemonList.length; pokemonsInList++) {
    pokeList[pokeList.length] = new Option(pokemonList[pokemonsInList][0], pokemonList[pokemonsInList][1]);
  }
}

// -----


// get random integer between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// get random number (with decimal) between 1 and max
function getRandomNumb(max) {
  return Math.random() * max + 2;
}

// after html is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  pokeTranslation(Bitty);
  pokemonOptionList();
});

// onClick (button form)
function translatingTime() {
  var x = document.getElementById('inputty').value;
  document.getElementById('post').innerHTML = `<pokespeech class="`+ document.getElementById('pokeOptions').text.toLowerCase() +`">
  ` + x + `
  </pokespeech>`;
  var y = document.getElementById('pokeOptions').value;
  document.getElementById('pokeSpeaky').value = y;

  // getting syllables, trimming white space, and making into an array
  var newPostPokemon = document.getElementById('pokeSpeaky').value.trim().split(', ');

  pokeTranslation(newPostPokemon);
  onClickTranslate();

  var z = document.getElementById('post').innerHTML;
  document.getElementById('outputty').value = z;
};

// <---------------------------------------------------------------------------------------------------->

// Function for each pokeSpeech element
function pokeTranslation(someArrayWords) {

  // find every instance of pokespeech that hasn't been translated yet
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");

  for (var pokeSpeechInstance = 0; pokeSpeechInstance < pokeSpeech.length; pokeSpeechInstance++) {

    // Get the original speech
    var origText = pokeSpeech[pokeSpeechInstance].textContent.trim();

    // Matches new sentences and punctuation, ignoring trailing space.
    // Break speech into sentences
    var re = /\s?(.*?[^\w\s',])\s?/ig;
    var sentences = origText.match(re);

    // creating empty array that will become string
    var pokefied = [];

    for (var sentenceIndex = 0; sentenceIndex < sentences.length; sentenceIndex++) {
      // trimming whitespace at start and end
      var sentence = sentences[sentenceIndex].trim();
      // counting how many words per sentence
      var wordCount = sentence.split(' ').length;
      // finding the punctuation for the sentence
      var punctuation = sentence.match(/[^\w\s']$/);

      // creating full pokefied sentence with words and punctuation
      var tranSentence = pokeTranslate(someArrayWords, wordCount) + punctuation;

      // add each finished sentence to the array
      pokefied.push(tranSentence);
    }

    // convert array into one long string
    var transText = pokefied.join(" ");

    // Run this function once per element!!
    // So it's only done once
    pokeSpeech[pokeSpeechInstance].classList.add('translated');

    // Setting attributes and storing both original text and pokefied text in them
    // Allows for quick changing on event
    pokeSpeech[pokeSpeechInstance].setAttribute("data-speech", origText);
    pokeSpeech[pokeSpeechInstance].setAttribute("data-pokespeech", transText);

    // Setting default to pokespeech
    pokeSpeech[pokeSpeechInstance].innerHTML = "";
    pokeSpeech[pokeSpeechInstance].classList.add("poke");
  }
}

// Function for each sentence within a pokeSpeech element
function pokeTranslate(someArrayWords, someCount) {
  // empty array that will be filled up
  var result = [];

  // add a word for every other word in original sentence, randomizing frequency
  for (var wordIndex = 0; wordIndex < someCount / getRandomNumb(10); wordIndex++) {

    // pick which random word to put
    var randomPokeWord = someArrayWords[getRandomInt(someArrayWords.length)];

    // first word capitalized, all others not
    if (wordIndex == 0) {
      result.push(randomPokeWord);
    } else {
      result.push(randomPokeWord.toLowerCase());
    }

  }

  // converting array to a string
  return result.join(" ");
}
