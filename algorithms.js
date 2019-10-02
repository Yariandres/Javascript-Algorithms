// // Simple, remove the spaces from the string, then return the resultant string.
// function noSpace(x) {
//   var result = x.split(' ').join('')
//   return result
// }
// noSpace('This i s a lon g te xt t hat is writt f or th is prac ti ce')

// // conver a string to number
// var stringToNumber = function (str) {
//   return parseInt(str);
// }

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// function countSheeps(arrayOfSheep) {
//   const result = arrayOfSheep.filter(i => i === true).length;
//   console.log('number of the found elements: ' + result);
// }

// var arr = [
//   true, true, true, false,
//   true, true, true, true,
//   true, false, true, false,
//   true, false, false, true,
//   true, true, true, true,
//   false, false, true, true
// ]

// countSheeps(arr);

function describeAge(age) {
  return (age <= 12 ? "You're a(n) kid" : "You're a(n) teenager")
  console.log(age)
}
describeAge(12)

