// function pasanganTerbesar(num) {
//   var array = String(num).split("");
//   //   console.log(array);
//   var hasil = [];
//   for (var i = 0; i < array.length - 1; i++) {
//     hasil[i] = array[i] + array[i + 1];
//   }
//   var output = hasil[0];
//   console.log(hasil);
//   for (var j = 0; j < hasil.length; j++) {
//     if (hasil[j] > output) {
//       output = hasil[j];
//     }
//   }
//   return output;
// }

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

function pasanganTerbesar(num) {
  var array = String(num).split("");
  //   console.log(array);
  var hasil = [];
  for (var i = 0; i < array.length - 1; i++) {
    hasil[i] = array[i] + array[i + 1];
  }
  var outputTerkecil = hasil[0];
  //   console.log(hasil);
  for (var j = 0; j < hasil.length; j++) {
    if (hasil[j] < outputTerkecil) {
      outputTerkecil = hasil[j];
    }
  }
  return outputTerkecil;
}
