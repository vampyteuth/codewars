//Parameters - number
//Return - boolean (true or false)
//Examples - testEven(0) => true, testEven(1) => false, testEven(1.2) => false
//Pseudocode
/*
make a function that takes in a number
evaluate that number whether odd or even
any decimal automatically evals to false
return true if n is even, or false if n is odd
*/
//1st attempt:
/*function testEven(n) {
  if (!Number.isInteger(n){
    return false
  }else if( n%2 === 0) {
    return true
  }else{
    return false
  }
}*/

//2nd attempt:
function testEven(n) {
  if (!Number.isInteger(n) || n % 2) {
    return false
  } else if (n % 2 === 0) {
    return true
  }
}