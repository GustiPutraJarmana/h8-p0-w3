function angkaPalindrome(num) {
  var input = false;
  while (input === false) {
    num++;
    var output = String(num)
      .split("")
      .reverse()
      .join("");
    // console.log(output);
    if (num == output) {
      input = true;
    } else {
      input = false;
    }
    // console.log(output);
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
