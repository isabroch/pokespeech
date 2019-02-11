// get random integer between 0 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// get random number (with decimal) between 1 and max
function getRandomNumb(max) {
  return Math.random() * max + 2;
}

// Running translate on whatever is input
function pokeTranslation() {
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");

  for (var pokeSpeechInstance = 0; pokeSpeechInstance < pokeSpeech.length; pokeSpeechInstance++) {
    // Get the original speech
    var origText = pokeSpeech[pokeSpeechInstance].textContent.trim();

    // Matches new sentences and punctuation, ignoring trailing space.
    // Break speech into sentences
    var re = /\s?(.*?[^\w\s',])\s?/ig;
    var sentences = origText.match(re);

    // creating empty array that will equal to all sentences
    var pokefied = [];

    for (var sentenceIndex = 0; sentenceIndex < sentences.length; sentenceIndex++) {
      // trimming whitespace at start and end
      var sentence = sentences[sentenceIndex].trim();
      // counting how many words per sentence
      var wordCount = sentence.split(' ').length;
      // finding the punctuation for the sentence
      var punctuation = sentence.match(/[^\w\s']$/);



      // translate text
      function pokeTranslate() {
        var result = [];

        // add a word for every other word in original sentence, randomizing frequency
        for (var wordIndex = 0; wordIndex < wordCount / getRandomNumb(10); wordIndex++) {

            var whichWord = getRandomInt(postPokemon.length);
            var randomPokeWord = postPokemon[whichWord];

          // first word capitalized, all others not
          if (wordIndex == 0) {
            result.push(randomPokeWord);
          } else {
            result.push(randomPokeWord.toLowerCase());
          }
        }


        // creating a string
        return result.join(" ");
      }

      // creating full pokefied sentence with words and punctuation
      var tranSentence = pokeTranslate() + punctuation;

      // add each finished sentence to the array
      pokefied.push(tranSentence);
    }

    // convert array into one long string
    var transText = pokefied.join(" ");


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
};

// For example query
document.addEventListener("DOMContentLoaded", function(event) {
  pokeTranslation();
});

// Submitting the form
function translatingTime() {
  var x = document.getElementById('inputty').value;
  document.getElementById('post').innerHTML = `<pokespeech class="pokenamehere">
  ` + x + `
  </pokespeech>`;
  pokeTranslation();
  onClickTranslate();
  var y = document.getElementById('post').innerHTML;
  document.getElementById('outputty').value = y;
};
