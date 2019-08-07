function tentukanDeretGeometri(arr) {
  var geometri = true;
  var selisih1 = arr[1] / arr[0];
  for (var i = arr.length - 1; i > 0; i--) {
    // console.log(i);
    var selisih2 = arr[i] / arr[i - 1];
    if (selisih1 !== selisih2) {
      geometri = false;
    }
  }
  return geometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
