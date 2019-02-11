// Matches new sentences and punctuation, ignoring trailing space.
// \s?([[:upper:]].*?[[:punct:]])

document.addEventListener("DOMContentLoaded", function(event) {
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");

  for (var i = 0; i < pokeSpeech.length; i++) {
    // Get the original speech
    var origText = pokeSpeech[i].textContent;
    // console.log(origText);

    // Break speech into sentences
    // Matches new sentences and punctuation, ignoring trailing space.
    var re = /\s?(.*?[^\w\s])\s?/ig;
    var sentences = origText.match(re);

// creating empty array that will equal to all sentences
    var pokefied = [];

    for (var a = 0; a < sentences.length; a++) {
      // trimming whitespace at start and end
      var sentence = sentences[a].trim();
      // counting how many words per sentence
      var wordCount = sentence.split(' ').length;
      // finding the punctuation for the sentence
      var punctuation = sentence.match(/[^\w\s]/);
      // creating full pokefied sentence with words and punctuation
      var tranSentence = pokeTranslate() + punctuation;

      // console.log(tranSentence);

      // translate text
      function pokeTranslate() {
        var result = [];

        // get random number between 0 and max
        function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
        }

        // add a word for every word in original sentence
        for (var b = 0; b < wordCount / 1; b++) {
          // first word capitalized, all others not - breaks with more than one sentence!!!
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

    // Setting attributes for changing on event
    pokeSpeech[i].setAttribute("data-speech", origText);
    pokeSpeech[i].setAttribute("data-pokespeech", transText);

    // Setting default to pokespeech
    pokeSpeech[i].innerHTML = "";
    pokeSpeech[i].classList.add("poke");

    // When clicking on the speech, switch over to translated version
    pokeSpeech[i].addEventListener("click", function() {
      this.classList.toggle("poke");
      this.classList.toggle("eng");
    });
  }
});
