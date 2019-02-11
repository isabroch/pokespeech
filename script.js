// run once html is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  // console check
  console.log("DOM fully loaded and parsed");

  // variables defined. :not added so that speech that has already been done before is not redone.
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");

  // get random number between 0 and max
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // translate text
  function pokeTranslate() {
    var result = [];

    // add a word for every second word in original sentence
    for (var i = 0; i < wordCount / 1.5; i++) {
      result.push(postPokemon[getRandomInt(wordCount)]);
    }

    // creating a string
    return result.join(" ");
  }

  // for loop that effects every instance of pokespeech that is not yet translated.
  for (var i = 0; i < pokeSpeech.length; i++) {
    // Get the original speech
    var origText = pokeSpeech[i].textContent;
    // Count the words in speech
    var wordCount = origText.split(' ').length;
    // Get last punctuation
    var textPunctuation = origText[origText.length - 1];
    // Translation to pokeSpeech
    var transText = pokeTranslate() + textPunctuation;

    // Log to console the three variables
    console.log("Translating: " + origText + " (" + wordCount + " words) (" + textPunctuation + ")");

    // Storing for hover/onclick effect
    pokeSpeech[i].setAttribute("data-speech", origText);
    pokeSpeech[i].setAttribute("data-pokespeech", transText);

    // Setting default to pokespeech
    pokeSpeech[i].innerHTML = "";
    pokeSpeech[i].classList.add("poke");

    // So it's only done once
    pokeSpeech[i].classList.add('translated');

    // When clicking on the speech, switch over to translated version
    pokeSpeech[i].addEventListener("click", function() {
      this.classList.toggle("poke");
      this.classList.toggle("eng");
    });

    // // When hovering with mouseover, switch over to translated version
    // pokeSpeech[i].addEventListener("mouseover", function() {
    //   this.classList.remove("poke");
    //   this.classList.add("eng");
    // });
    //
    // pokeSpeech[i].addEventListener("mouseout", function() {
    //   this.classList.add("poke");
    //   this.classList.remove("eng");
    // });
  }
  // end for loop


});
