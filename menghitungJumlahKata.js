function hitungJumlahKata(kalimat) {
  var kalimat = kalimat.split(" ");
  var output = [];
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] != "") {
      output.push(kalimat[i]);
    }
  }
  // console.log(output);
  return output.length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
