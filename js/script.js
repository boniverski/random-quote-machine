function getQuote() {
  $.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", function(json) {

    $("#text").fadeOut("fast", function() {
      $(this).html(json.quote);
    }).fadeIn("fast");

    $(".quote-author").fadeOut("fast", function() {
      $(this).html(json.author);
    }).fadeIn("fast");
  });
}

$(document).ready(function() {
  /*getQuote();*/

  $("#button-quote").on("click", getQuote);

});
