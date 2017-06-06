// Getting quotes data from crossorigin.me APIs:
function getQuote() {
  $.getJSON("https://crossorigin.me/https://quotes.stormconsultancy.co.uk/random.json", function(json) {
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

function tweet(){
  var quote = $("#text").text();
  var author = $(".quote-author").text();
  window.open("https://twitter.com/intent/tweet?text="+"\""+quote+"\""+"  "+"– "+author);
}

//Taking care of buttons when page is loaded
$(document).ready(function() {
  //getQuote(); <-- Optional: Display quote on page load
  $("#button-quote").on("click", getQuote);
  $("#button-tweet").on("click", tweet);

});
