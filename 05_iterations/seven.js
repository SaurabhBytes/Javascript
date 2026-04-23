let arr = [23,24,45,56,80]

// let total = arr.reduce((accumulator , currentValue) => {
//     return accumulator + currentValue
// }, 0)

let total = arr.reduce((acc,curr) => acc  + curr , 0 )

// console.log(total)



let products = [
    {name: 'Laptop', price: 50000},
    {name: 'Phone', price: 20000},
    {name: 'Tablet', price: 30000},
    {name: 'Watch', price: 5000},
]

let totalPrice = products.reduce((acc,curr) => acc + curr.price , 0)
// console.log(totalPrice)


// Challenge 1 — Sum
// Create an array of 5 students each with name and marks. Use reduce to find the total marks of all students combined.

let students = [
    {name: 'Saurabh', marks: 30},
    {name: 'Heena', marks: 25},
    {name: 'Saumya', marks: 22},
    {name: 'Rahul', marks: 28},
    {name: 'Rohit', marks: 20},
    ]

let totalMarks = students.reduce((acc,curr) => acc + curr.marks , 0)
console.log(totalMarks)


// Challenge 2 — Maximum
// Create an array of 6 random numbers. Use reduce to find the highest number without using Math.max().
let randomNum = [3,5,7,4,99,120] 

let maxNum = randomNum.reduce((acc,curr) =>{
    if(acc > curr) return acc
    return curr
})

console.log(maxNum)


// Challenge 3 — Count occurrences
// Create an array of 8 random colours with some repeating like:

let colours = ['red', 'blue', 'red', 'green', 'blue', 'red', 'yellow', 'green']

let count = colours.reduce((acc,curr)=>  {
    // if(acc[curr]){
    //     acc[curr] = acc[curr] + 1
    // } else{
    //     acc[curr] = 1
    // }

    acc[curr] = (acc[curr] || 0) + 1
    return acc
    }, {})
console.log(count)




// Challenge 4 — Flatten
// Create this nested array:

let arrr = [[1,2,3], [4,5,6], [7,8,9]]

let nextArray = arrr.reduce((acc,curr) => [...acc, ...curr], [])

console.log(nextArray)