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
// var budgetController = (function () {
//   var x = 23;

//   var add = function (a) {
//     return x + a;
//   }

//   //  creating the closure
//   return {
//     publicTest: function (b) {
//       console.log(add(b))
//     }
//   }
// })();

// returns undefine
// budgetController.add(5);

//  returns 28
// budgetController.publicTest(5);

// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes >= par + 3) {
//     return names[6];

//   } else if (strokes <= par + 1) {
//     return names[4];

//   } else if (strokes = par + 2) {
//     return names[5];

//   } else if (strokes = par - 1) {
//     return names[2];
//   }
// }
// // Change these values to test
// console.log(golfScore(4, 3));

// var count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       return count + " Bet";
//       break;

//     case 7:
//     case 8:
//     case 9:
//       count = 0;
//       return count + " Hold";
//       break;

//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--;
//       return count + " Hold";
//   }

//   return count;
//   // Only change code above this line
// }

// // Add/remove calls to test your function.
// // Note: Only the last will display
// console.log(cc(2));
// console.log(cc(3));
// console.log(cc(7));
// console.log(cc('K'));
// console.log(cc('A'));



// **************** OBJECTS *****************


// var someObj = {
//   propName: "John"
// };

// function propPrefix(str) {
//   var s = "prop";
//   return s + str;
// }
// var someProp = propPrefix("Name"); // someProp now holds the value 'propName'

// console.log(someObj[someProp]); // "John"


// Convert the switch statement into an object called lookup. Use it to look up valand assign the associated string to the resultvariable.
// function phoneticLookup(val) {

//   var lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank"
//   }
//   result = lookup[val];

//   return result;
// }

// phoneticLookup("charlie");


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  } else {
    return "Not Found";

  }
}
// Test your code by modifying these values
console.log(checkObj("bed"));
