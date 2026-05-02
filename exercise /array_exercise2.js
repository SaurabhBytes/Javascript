// Challenge 1 — Easy
// Create two arrays, one of 3 fruits and one of 3 vegetables. Combine them using the spread operator and print the result.

let fruits = ['apple', 'banana', 'orange']
let veggies = ['tomato', 'potato', 'cabbage']

let fruits_veggies = [...fruits, ...veggies]
console.log(fruits_veggies)


// Challenge 2 — Medium
// Create a nested array like [1, 2, [3, 4, [5, 6, [7, 8]]]]. Flatten it completely using flat() and print the result.

const arr1 = [1, 2, [3, 4, [5, 6, [7, 8]]]]

console.log(arr1.flat(Infinity))

// Challenge 3 — Think
// Create 3 separate variables with your favourite numbers. Use Array.of() to make them into an array. Then use Array.from() on a string of your name and print both results. What's the difference between the two?

let var1 = 101
let var2 = 203
let var3 = 504
console.log(Array.of(var1,var2,var3))


let name = "Saurabh"
let city  = "Bilaspur"
console.log(Array.from(name))




// Array.of() — creates an array from individual values you pass in
// javascriptArray.of(101, 203, 504)  // [101, 203, 504]

// Simple — whatever you give it becomes elements of the array.



//Array.from() — converts an iterable or array-like thing into an array
// Array.from("Saurabh")  // ['S','a','u','r','a','b','h']
// Array.from("Bilaspur") // ['B','i','l','a','s','p','u','r']

// It breaks down anything that is iterable — strings, sets, maps etc. into individual elements.



