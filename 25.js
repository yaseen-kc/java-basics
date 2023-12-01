const prompt = require("prompt-sync")();

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

function displayReadingStatus() {
  for (var i = 0; i < library.length; i++) {
    var book = library[i];
    var statusMessage;

    if (book.readingStatus) {
      statusMessage = "Already read '" + book.title + "' by " + book.author;
    } else {
      statusMessage = "Need to read '" + book.title + "' by " + book.author;
    }

    console.log(statusMessage);
  }
}

displayReadingStatus();
