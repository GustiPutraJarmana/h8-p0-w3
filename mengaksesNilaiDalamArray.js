function balikString(str) {
  var output = [];
  for (var i = str.length - 1; i >= 0; i--) {
    output.push(str[i]);
  }
  return output.join([]);
}
console.log(balikString("Hallo World!"));
