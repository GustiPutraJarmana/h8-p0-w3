function groupAnimals(animals) {
  var output = [];
  var temporary = [];
  animals.sort();
  // console.log(animals);
  var hurupPertama = animals[0][0];
  // console.log(hurupPertama);
  for (var i = 0; i < animals.length; i++) {
    // console.log(i);
    if (animals[i][0] === hurupPertama) {
      temporary.push(animals[i]);
    } else {
      output.push(temporary);
      temporary = [];
      hurupPertama = animals[i][0];
      temporary.push(animals[i]);
    }
    if (i === animals.length - 1) {
      output.push(temporary);
    }
  }
  return output;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [["ayam", "anoa"], ["cacing"], ["kuda", "kancil"]];
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta']]
