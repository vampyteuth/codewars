// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

P:what do we do when we get null or undefined? do we ever get anything besides
a Boolean value?
R:Sum of trues in an array
E:
P:make afunction that takes in an array
function countSheeps(arr){
    //filter out non-trues
    let newArr=arr.filter(e=>e)
    //sum trues  and return them babes
    return newArr.length
}

  
