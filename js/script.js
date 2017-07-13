// Getting quotes data from crossorigin.me APIs:
function getQuote() {
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json) {
    //Getting quote content, adding fading effect on change:
    $("#text").fadeOut("fast", function() {
      $(this).html(json.quote);
    }).fadeIn("fast");

    //Getting author's name, adding fading effect on change:
    $(".quote-author").fadeOut("fast", function() {
      $(this).html(json.author);
    }).fadeIn("fast");
  });
}

//Generating tweet with quote and author
function tweet(){
  var quote = $("#text").text();
  var author = $(".quote-author").text();
  window.open(`https://twitter.com/intent/tweet?text="${quote}" – ${author}`);
}

//Taking care of buttons when page is loaded
$(document).ready(function() {
  getQuote(); // <-- Display quote on page load. Comment this to disable.
  $("#button_new-quote").on("click", getQuote);
  $("#button_tweet").on("click", tweet);
});
