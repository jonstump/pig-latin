##Bugs
*code a WIP. So far loops do not work.

Tests

Describe: pigLatin()
test: "It will add 'way' to the end of the words that begin with a vowel"
Expect(pigLatin("a")).toEqual("away");

test: "It will move the first one or more consonants to the end, and then add 'ay' to the end"
Expect(pigLatin("translator")).toEqual("anslatortray)

test: "For words beginning with 'y', treat 'y' as a consonant."
Expect(pigLatin("yesterday")).toEqual("esterdayyay")

test: "If the first consonants include 'qu' move the u along with the q." 
Expect(pigLatin("squeal")).toEqual("ealsquay")
