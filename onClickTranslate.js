document.addEventListener("DOMContentLoaded", function(event) {
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");
  for (var i = 0; i < pokeSpeech.length; i++) {
    // When clicking on the speech, switch over to translated version
    pokeSpeech[i].addEventListener("click", function() {
      this.classList.toggle("poke");
      this.classList.toggle("eng");
    });
  };
});
