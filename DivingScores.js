
// Description
// For this Kata you will need to create a function which works out the score of a dive in an Olympic diving competition and displays it in the correct format. The function will take 2 arguments:

// An array of numbers representing the judges' scores, called scores
// A number representing the degree of difficulty of the dive, called tariff
// The 2 lowest and 2 highest scores by the judges are discarded and the 3 remaining scores are added together. The result of this is then multiplied by the difficulty ( tariff ) to get the score for the dive.

// https://www.britannica.com/story/how-is-diving-scored

// The answer should be a string, and should always have exactly 2 digits after the decimal point, as this is how diving scores are displayed.

// Note
// The scores will only contain numbers between 0 and 10 and the tariff will always be greater than 0.

// Example
// scoreOfDive( [ 7, 7.5, 8, 7.5, 6, 7, 7 ], 3 )  =>  '64.50'




function scoreOfDive(scores, tariff) {
    scores = scores.sort((a,b) => a-b)
    return (scores.slice(2,-2).reduce((a,b)=> a+b, 0)*tariff).toFixed(2)
  }
  
  //parameters - create a function that takes in two arguments: an array and a number
  //return a number that represents the score of the dive but in the type of string in a specific format number.##
  //example scoreOfDive( [ 7, 7.5, 8, 7.5, 6, 7, 7 ], 3 )  =>  '64.50'
  //psuedocode- run through the array separating the second lowest and highest scores
  //add the 3 left together
  //multiply by tariff
  //return score in a string to 2 digits