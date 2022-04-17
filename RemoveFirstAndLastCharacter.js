// It's pretty straightforward. Your goal is to create a 
// function that removes the first and last characters of a string. You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

const removeChar = str => {
    str = str.split('')
    let first = str.shift('')
    let last = str.pop()
    return str.join('')
  };
  