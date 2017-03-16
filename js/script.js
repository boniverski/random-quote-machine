var quotes = [
  "Lorem Ipsam bla bla.  - XY",
  "More Lorem Ipsam bla bla bla.  - ZY",
  "Even more Lorem ipsam bla bla bla.  - VW"
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("text").innerHTML = quotes[randomNumber];
}
