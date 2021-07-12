exports.printMsg = function(message) {
    words = String(message).split(" ")
    console.log("this message has " + words.length + " words")
  }