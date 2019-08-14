var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

console.log("First number over 18 is " + first);

function myFunction(value, index, array) {
  return value > 18;
}