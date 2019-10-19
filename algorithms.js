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


//Setup
// var contacts = [
//   {
//     "firstName": "Akira",
//     "lastName": "Laine",
//     "number": "0543236543",
//     "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//     "firstName": "Harry",
//     "lastName": "Potter",
//     "number": "0994372684",
//     "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//     "firstName": "Sherlock",
//     "lastName": "Holmes",
//     "number": "0487345643",
//     "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (var i = 0; i < contacts.length; i++) {

//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       }
//     } else {
//       return "No such contact";
//     }
//   };

//   // Only change code above this line
// }

// // Change these values to test your function
// lookUpProfile("Akira", "likes");

// // Only change code above this line
// // Change these values to test your function
// console.log(lookUpProfile("Akira", "likes"));


// What formula will generate a random number that falls within a range of two specific numbers?
// Math.floor(Math.random() * (max - min + 1)) + min;


// function checkSign(num) {
//   return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
// }

// console.log(checkSign(0));

// Fix to return 123 instead of 333
// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 300);
// }
// solution

// let i;
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 300);
}
