const quotes = [
  {
    quote: "Tralalero Tralala",
    author: "Italian Brainrot",
  },
  {
    quote: "Bombardiro Crocodilo",
    author: "Italian Brainrot",
  },
  {
    quote: "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur",
    author: "Italian Brainrot",
  },
  {
    quote: "Brr Brr Patapim",
    author: "Italian Brainrot",
  },
  {
    quote: "Chimpanzini Bananini",
    author: "Italian Brainrot",
  },
  {
    quote: "Lirilì Larilà",
    author: "Italian Brainrot",
  },
  {
    quote: "Bombombini Gusini",
    author: "Italian Brainrot",
  },
  {
    quote: "Capuccino Assassino",
    author: "Italian Brainrot",
  },
  {
    quote: "Trippi Troppi",
    author: "Italian Brainrot",
  },
  {
    quote: "Frigo Camelo",
    author: "Italian Brainrot",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
