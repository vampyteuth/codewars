//Parameters - integer , a string , a conversion
//Return - a string with a number inside of it must have two decimel places
//Example - (15) =>'3138.75 Chinese Yuan'
//Pseudocode
/*
make a function that takes in a number
run through a conversion rate
maintain 2 decimal places in number output
outputs as a string*/

function usdcny(usd) {
  let cny= 6.75* usd
  let cny1 =cny.toFixed(2)
  return `${cny1} Chinese Yuan`
}