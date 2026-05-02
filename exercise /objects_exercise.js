// Challenge 1 — Easy
// Create an object of yourself with keys — name, age, city, isStudent. Print any two values using dot notation and one using bracket notation.

let me = {
    name: "Saurabh",
    age: 22,
    city: "Bilaspur",
    isStudent: true

}

console.log(me.name)
console.log(me.age)
console.log(me["city"])

// Challenge 2 — Medium
// Create an object of a phone with keys — brand, model, price. Freeze the object then try to change the price. Print the object and see what happens.

let iphone = {
    brand: "Apple",
    model: 16,
    price: 100000,
}

iphone.model = 17 
Object.freeze(iphone)

iphone.brand = "Samsung"

console.log(iphone)


me.introduce = function(){
    return `Hi I am ${this.name} from ${this.city}`
}
console.log(me.introduce());