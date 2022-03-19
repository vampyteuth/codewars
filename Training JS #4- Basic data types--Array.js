function getLength(arr){
  //return length of arr
  return arr.length
}
console.log(getLength)

function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
console.log(getFirst)

function getLast(arr){
  //return the last element of arr
  return arr[arr.length -1]
}
console.log(getLast)

function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(1)
  return arr
}
console.log(pushElement)

function popElement(arr){
  //pop an element from arr first thought you didn't need to make a variable but it returned undefined without the const
  const popped = arr.pop()
  return arr
}
console.log(popElement)