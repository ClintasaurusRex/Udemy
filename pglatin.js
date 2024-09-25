function toPigLatin(word) {
  if (word.length > 0) {
    return word.slice(1) + word[0] + "ay";
  }
  return word;
}

const args = process.argv.slice(2);

const pigLatinWords = args.map(toPigLatin);
console.log("to piglatin", args);

const pigLatinSentence = pigLatinWords.join(" ");
console.log(pigLatinSentence);
