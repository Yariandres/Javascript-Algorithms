// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
  var result = x.split(' ').join('')
  return result
}
noSpace('This i s a lon g te xt t hat is writt f or th is prac ti ce')

// conver a string to number
var stringToNumber = function (str) {
  return parseInt(str);
}
