// It seems as though the infamous soundcloud rapper "6ix 9ine" has been locked away for good. As sad as this may be, his name will surely live on...

// Write a function that takes a string representing a date-of-birth as an argument ("dd.mm.yy") and returns a string containing the generated Rap-Name.

// How to figure out one's Rap-Name:

// Find the average of the two digits that make up the DAY of birth. ("DD.mm.yy")
// Find the average of the two digits that make up the YEAR of birth. ("dd.mm.YY")
// Note: only integers are admissible, therefore round up averages that are decimal
// Note: if the average of the YEAR of birth is 0 (in the case of "dd.mm.00"), the format is '0ero'
// Return a single string containing both numbers represented in the following format - e.g, '3hree 6ix'
// format = the respective number replaces the first character for the word of said number. 'three' becomes '3hree'


function rapNameGen(dob){
    dob = dob.split(".")
    
    let numberMap = {
      0:"0ero",
      1:"1ne",
      2:"2wo",
      3:"3hree",
      4:"4our",
      5:"5ive",
      6:"6ix",
      7:"7even",
      8:"8ight",
      9:"9ine",
      10:"10en"
    }
    
    let dd = dob[0]
    let dayArr = dd.toString().split("")
    let avgDay = Math.round(dayArr.reduce((sum, curr) => sum + Number(curr), 0) / dayArr.length)
    
    let yy = dob[2]
    let yearArr = yy.toString().split("")
    let avgYear = Math.round(yearArr.reduce((sum, curr) => sum + Number(curr), 0) / 2)
    
    return `${numberMap[avgDay]} ${numberMap[avgYear]}`
  }