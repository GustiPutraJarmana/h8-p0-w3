function tentukanDeretAritmatika(arr) {
  var aritmatika = true;
  var selisih = arr[1] - arr[0];
  for (var i = arr.length - 1; i > 0; i--) {
    var perselisihan = arr[i] - arr[i - 1];
    if (selisih !== perselisihan) {
      aritmatika = false;
    }
  }
  return aritmatika;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
