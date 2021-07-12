const prompt = require('prompt-sync')();

exports.msgLen = function() {
    const message = prompt("Input a String: ");
    words = String(message).split(" ")
    console.log("this message has " + words.length + " words")
  }