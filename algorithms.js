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

// function describeAge(age) {
//   return (age <= 12 ? "You're a(n) kid" : "You're a(n) teenager")
//   console.log(age)
// }
// describeAge(12)

// Write a function nextInLinewhich takes an array (arr) and a number (item) as arguments.

// Add the number to the end of the array, then remove the first element of the array.

// The nextInLinefunction should then return the element that was removed.

// function nextInLine(arr, item) {
//   arr.push(item);
//   var res = arr.shift();

//   return res;  // Change this line
// }
// console.log(nextInLine([1, 2, 3, 4, 5], 1));
// console.log(nextInLine(res));

// relocation = function (position) {
//   if (position === "no-coding") {
//     console.log("No thanks.")
//   } else if (position === "coding all day") {
//     console.log("I am IN!")
//   } else {
//     console.log("1 2 3, living la vida LOCA")
//   }
// }

// relocation();
// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-inequality-operator


// Create a function using closures
var budgetController = (function () {
  var x = 23;

  var add = function (a) {
    return x + a;
  }

  //  creating the closure
  return {
    publicTest: function (b) {
      console.log(add(b))
    }
  }
})();

// returns undefine
// budgetController.add(5);

//  returns 28
budgetController.publicTest(5);