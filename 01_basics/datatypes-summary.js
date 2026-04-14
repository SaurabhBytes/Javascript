// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );       // This is the unique behavior of symbol that even if the values inside are same they are not equal.


const bigNumber = 345678907327849938724784392748372n

// Non - Primitive (Reference)

// Array, Objects, Functions

const heroes = ["ironman", 'hulk', 'spiderman']

 let data = {
    name: "hitesh",
    age: 22,
    city: "delhi"
}



const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heroes);     // Array is also returned as object
console.log(typeof data);

console.log(Array.isArray(heroes))           // To check if something is array or not 




