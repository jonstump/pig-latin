$(document).ready(function() {
  $("#sentenceForm").submit(function(event) {
    event.preventDefault();
    const sentence = $("input#sentence").val();
    let splitSent = sentence.split(" ");
    //console.log(splitSent);
    const vowels = ["a","e","i","o","u"];

    const pigLatin = splitSent.map(function(word) {
      vowels.forEach(function(element) {
        if (word.charAt(0) === element) {
          return true
        } else {
          return false
        }
      })

     // if (word[0] === 'a' || 'e' || 'i' || 'o' |///| 'u') {
      //  return true;
      //} else {
       //   return false;
      //  }
      
    });
    console.log(pigLatin);
  });
});