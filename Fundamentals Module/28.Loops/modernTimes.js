function solve(str) {
  const words = str.split(" ");
  const hashtagWords = [];

  words.forEach((word) => {
    if (word.startsWith("#") && word.length > 1) {
      word = word.split("");
      word.shift();

      const onlyLetters = word.every((letter) => {
        const charCode = letter.charCodeAt(0);

        return (
          (charCode > 64 && charCode < 91) ||
          (charCode > 96 && charCode < 123) ||
          charCode == 8
        );
      });

      if (onlyLetters) {
        hashtagWords.push(word.join(""));
      }
    }
  });

  console.log(hashtagWords.join("\n"));
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
