function hitungJumlahKata(kalimat) {
  var kalimat = kalimat.split(" ");
  kalimat = kalimat.length;
  return kalimat;
}

// ================================== //

function hitungJumlahKata(kalimat) {
  var space = 0;
  for (var i = 1; i < kalimat.length; i++) {
    // console.log(kalimat.length);
    if (kalimat[i] === " ") {
      space = space + 1;
    }
  }
  return space + 1;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5