// Matches new sentences and punctuation, ignoring trailing space.
// \s?([[:upper:]].*?[[:punct:]])

document.addEventListener("DOMContentLoaded", function(event) {
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");

  for (var i = 0; i < pokeSpeech.length; i++) {
    // Get the original speech
    var origText = pokeSpeech[i].textContent;

    // Break speech into sentences
    // Matches new sentences and punctuation, ignoring trailing space.
    var re = /\s?(.*?[^\w\s'])\s?/ig;
    var sentences = origText.match(re);

    // creating empty array that will equal to all sentences
    var pokefied = [];

    for (var a = 0; a < sentences.length; a++) {
      // trimming whitespace at start and end
      var sentence = sentences[a].trim();
      // counting how many words per sentence
      var wordCount = sentence.split(' ').length;
      // finding the punctuation for the sentence
      var punctuation = sentence.match(/[^\w\s']/);
      // creating full pokefied sentence with words and punctuation
      var tranSentence = pokeTranslate() + punctuation;

      // translate text
      function pokeTranslate() {
        var result = [];

        // get random integer between 0 and max
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max + 1));
        }

        // get random number (with decimal) between 1 and max
        function getRandomNumb(max) {
          return Math.random() * max + 1;
        }

        // add a word for every other word in original sentence, randomizing frequency
        for (var b = 0; b < wordCount / getRandomNumb(3); b++) {

          // first word capitalized, all others not
          if (b == 0) {
            result.push(postPokemon[getRandomInt(wordCount)]);
          } else {
            result.push(postPokemon[getRandomInt(wordCount)].toLowerCase());
          }
        }

        // creating a string
        return result.join(" ");
      }

      // add each finished sentence to the array
      pokefied.push(tranSentence);
    }

    // convert array into one long string
    var transText = pokefied.join(" ");


    // So it's only done once
    pokeSpeech[i].classList.add('translated');

    // Setting attributes and storing both original text and pokefied text in them
    // Allows for quick changing on event
    pokeSpeech[i].setAttribute("data-speech", origText);
    pokeSpeech[i].setAttribute("data-pokespeech", transText);

    // Setting default to pokespeech
    pokeSpeech[i].innerHTML = "";
    pokeSpeech[i].classList.add("poke");
  }
});
