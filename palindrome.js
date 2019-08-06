function palindrome(words) {
  var flag = true;
  for (var i = 0; i <= words.length / 2; i++) {
    if (words[i] !== words[words.length - i - 1]) {
      flag = false;
    }
  }

  return flag;
  // if (flag === false) {
  //   return (flag = false);
  // } else {
  //   return (flag = true);
  // }
}

// TEST CASES
// katak * 3;
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
