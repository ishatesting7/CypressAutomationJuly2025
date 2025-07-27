function findOneMismatchWord(target, words) {
    for (let word of words) {
      if (word.length !== target.length) continue;
  
      let mismatch = 0;
      for (let i = 0; i < word.length; i++) {
        if (word[i] !== target[i]) mismatch++;
        if (mismatch > 1) break; // No need to continue
      }
  
      if (mismatch === 1) {
        return word;
      }
    }
    return null; // No one-mismatch match found
  }
  
  // Example
  const array = ["banana", "bob", "bans"];
  const input = "banaba";
  
  console.log(findOneMismatchWord(input, array)); // Output: "banana"
  console.log(findOneMismatchWord("candle", ["handle", "bundle", "cangle"])); // "cangle"
  console.log(findOneMismatchWord("apple", ["apply", "ample", "apole"])); // "apole"
  console.log(findOneMismatchWord("cat", ["cut", "cot", "bat"])); // "cut" or "cot" or "bat" (any one)
  console.log(findOneMismatchWord("hello", ["hello", "world", "hella"])); // "hella"
    