// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    let arr = n.toString().split('').reverse()
     let numArr = []
     length= arr.length
       for (var i = 0; i < length; i++)
            numArr.push(parseInt(arr[i]));
      return numArr
    }