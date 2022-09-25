let arr1 = [1,2,3,4]
 let arr2 = [5,6,7,8]
 console.log(arr1)
 for(let i = 0; i< arr2.length; i++) {
     arr1.splice(arr1.length - 1, 1) // arr1.pop()
  let additionArray = arr2.slice(0,i+1) // O(n)
console.log(arr1.concat(additionArray))
 }