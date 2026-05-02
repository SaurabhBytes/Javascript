// Challenge 1 — Easy
// Create an object of a student with name, age, grade. Use Object.keys(), Object.values() and Object.entries() on it and print all three. Observe the difference in output.


let student = {
    name1: 'Saurabh Tiwari',
    age1: 25,
    grade: 'A'
}

console.log(Object.keys(student))           //  it prints the data in form of arrays and only prints keys which are in form of string
console.log(Object.values(student))       //  it prints in array as well 
console.log(Object.entries(student))     // It prints in the form of array inside which there are small arrays with their individual keys and data



//Challenge 2 — Medium
// Create two objects — one with your personal details and one with your college details. Merge them using spread operator into a third object and print it.


let myDetails = {
    myname: 'Saurabh',
    age: 22,
    mycity: 'Delhi'

}

let collegeDetails = {
    name: 'LCIT',
    course: 'computer science',
    city: 'Bilaspur'
}

let allDetails = {...myDetails, ...collegeDetails}
console.log(allDetails)



// Challenge 3 — Think
// Destructure name and age from your student object in Challenge 1. But while destructuring rename name to studentName. Print both destructured variables.

let {name1:  studentName} = student
let {age1} = student

console.log(studentName);
console.log(age1)
