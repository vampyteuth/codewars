// // https://www.codewars.com/kata/sorted-yes-no-how/train/javascript

// // Complete the method which accepts an array of integers, and returns one of the following:

// // "yes, ascending" - if the numbers in the array are sorted in an ascending order
// // "yes, descending" - if the numbers in the array are sorted in a descending order
// // "no" - otherwise
// // You can assume the array will always be valid, and there will always be one correct answer.


// // function isSortedAndHow(array){
// //     if (array === array.sort((a,b)=>a-b)){
// //         return 'yes, ascending'
// //     }else if(array === array.sort((a,b)=> b-a)){
// //         return 'yes descending'
// //     }else{
// //         return 'no'
// //     }
// // }


// // let ascend = array.sort((a,b) => a>b
// // let descend = array.sort ((a, b) => a<b

// function isSortedAndHow(array {
//     for(i=0; i <array.length; i++){
//         if(array[i] < array[i+1){
//             return 'yes, ascending'
//         }else if({

//         }
//     }
// })


// const data = ['delta', 'alpha', 'charlie', 'bravo'];

// // temporary array holds objects with position and sort-value
// const mapped = data.map((v, i) => {
//   return { i, value: someSlowOperation(v) };
// })

// // sorting the mapped array containing the reduced values
// mapped.sort((a, b) => {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   return 0;
// });

// const result = mapped.map(v => data[v.i]);


// const asc = array.map((a,b)=> {
//     return {i value:newArr(a) }
// })
// asc.sort((a, b) => {
//     if (a.value > b.value) {
//       return 'yes, ascending';
//     }
//     if (a.value < b.value) {
//       return 'yes, descending';
//     }
//     return 'no';
//   });


//   const isSortedAndHow = array.map((a,b)=> {
//     return {i, num, newArr(a) }
// })
// newArr.sort((a, b) => {
//     if (a.value > b.value) {
//       return 'yes, ascending';
//     }
//     if (a.value < b.value) {
//       return 'yes, descending';
//     }
//     return 'no';
//   });


// ///PARKER

// function isSortedAndHow(array) {
//     let result
//      //set initial result value
//      if(array[0] < array[1]){
//       result = 1
       
//     }else{ result = 2}
//     //compare future result values with current
//   for(i = 0;i < array.length - 1;i++){
//     if(array[i] < array[i+1] && result === 1){
      
//       result = 1
      
//     }else if(array[i] > array[i+1] && result === 2){
      
//       result = 2
      
//     }else{result = 3}
//     }
//     //return answer based off result value
//   if(result === 1){
    
//       return "yes, ascending"
    
//     }else if(result === 2){
      
//       return "yes, descending"
      
//     }else if( result === 3){
      
//              return "no"}
//   }


//   function isSortedAndHow(array) {
//     let arr1 = array.sort()
     
     
//      if(arr1.sort((a,b)=> a>b){
//       return 'yes, descending'
//    // }else if( array.sort((a,b) => a<b){
//    //   return 'no, ascending'
//    }else{
//        return 'no'
//      }

   


     function isSortedAndHow(array) {
        let arrAsc = [...array]
        let arrDes = [...array]
        arrAsc.sort((a,b) => a-b)
        arrDes.sort((a,b) => b-a)
        
        if(array.toString() === arrAsc.toString()){
          return "yes, ascending"
        }else if(array.toString() === arrDes.toString()){
          return "yes, descending"
          }else{return "no"}
        }