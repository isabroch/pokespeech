document.addEventListener("DOMContentLoaded", function(event) {
  onClickTranslate();
});

// Keeping function separate because it should be able to run alone
function onClickTranslate() {
  var pokeSpeech = document.querySelectorAll("pokespeech:not(.traslated)");
  for (var i = 0; i < pokeSpeech.length; i++) {
    // When clicking on the speech, switch over to translated version
    pokeSpeech[i].addEventListener("click", function() {
      this.classList.toggle("poke");
      this.classList.toggle("eng");
    });
  };
}
