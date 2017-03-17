$(document).ready(function() {
  $("#button-quote").on("click", function() {
    $.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", function(a) {

      $(".quote-text").html(a.quote);
      $(".quote-author").html("<em>– " + a.author + "</em>");

    });
  });
});
