// Challenge 1 — EasyCreate an array of 5 of your favourite movies and print the 3rd one using its index.

let myFavourites = ['Animal', 'Jawan', 'Dhurandhar','Hero', 'Revenge']
console.log(myFavourites[2])

// Challenge 2 — Medium
// Create an array of numbers from 1 to 6. Remove the last element and add two new numbers 7 and 8 at the end. Print the final array.

let arr1 = [1,2,3,4,5,6]
 arr1.pop()
 arr1.push(7,8)
console.log(arr1)


// Challenge 3 — Think
// Create an array of 5 numbers. Slice from index 1 to 3 and store in a new variable. Then splice 2 elements from index 0 of the original. Print both the original and new variable and explain what changed.

let arr2 = [1,3,5,7,9]
let newArr = arr2.slice(1,4)
console.log(newArr)
console.log(arr2)


let newArr2 = arr2.splice(0,2)
console.log(newArr2)
console.log(arr2)