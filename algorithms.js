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

function countSheeps(arrayOfSheep) {
  const arrayToCount = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
  ];

  const result = arrayToCount.filter(i => i === true).length;
  console.log('number of the found elements: ' + result);
}

countSheeps();
