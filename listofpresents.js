// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _


function howManyGifts(maxBudget, gifts){
  let numOfGifts = 0
  gifts.sort((a,b) => a - b)
//     if(maxBudget == 0){
//       return numOfGifts
//     }
  for(let i = 0; i < gifts.length; i++){
    numOfGifts++
    maxBudget = maxBudget - gifts[i]
    if(maxBudget < 0){
      return numOfGifts - 1
    } else if (maxBudget == 0){
      return numOfGifts 
    }
  }
    return numOfGifts
}

//Gar

// function howManyGifts(maxBudget, gifts){
//   let count = 0;
//   let cost = 0;
  
//   gifts.sort((a, b) => a - b)
  
//   for(let i = 0; i < gifts.length; i++){
//       cost += gifts[i]
//       count++

//       if(cost > maxBudget){
//         count -= 1
//         return count
//       }
//   }
//   return count
// }