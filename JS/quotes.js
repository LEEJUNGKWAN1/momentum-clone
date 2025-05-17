const quotes = [
  {
    quote: `"To-to-ro? You're Totoro!... I bet you're Totoro..."`,
    author: "-Mei Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"You Must Have Seen One Of The Spirits Of The Forest, And That Means You're A Very Lucky Girl. You Can Only See The Spirits If They Want You To. Let's Go Give Them A Proper Greeting."`,
    author: "-Tatsuo Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"Totoro, I beg you, please protect Mei. She'll be lost, and probably scared. Please believe me, I'll be good for the rest of my life if I can just see her again."`,
    author: "-Satsuki Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"We thought you might not be too happy about the house being filled with spooks."`,
    author: "-Satsuki Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"Magnificent Tree. It's Been Around Since Long Ago, Back In The Time When People And Trees Used To Be Friends."`,
    author: "-Tatsuo Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"Trees and people used to be good friends. I saw that tree and decided to buy the house. Hope Mom likes it too."`,
    author: "-Tatsuo Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"Everybody, try laughing. Then whatever scares you will go away!"`,
    author: "-Tatsuo Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"Come out, come out, wherever you are!"`,
    author: "-Satsuki & Mei Kusakabe, My Neighbor Totoro-",
  },
  {
    quote: `"If we all keep smiling, the sprites may gradually go away and leave this place alone. Yes, I'm sure that somewhere up in that ceiling, they're busily discussing plans for leaving the house."`,
    author: "-Kanta's Grandmother, My Neighbor Totoro-",
  },
  {
    quote: `"It isn't the end of the world. Your old Nanny's here to help. Let's see that beautiful smile."`,
    author: "-Kanta's Grandmother, My Neighbor Totoro-",
  },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
