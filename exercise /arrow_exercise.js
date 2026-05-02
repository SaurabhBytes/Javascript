// Challenge 1 — Easy
// Convert this normal function into an arrow function with implicit return:
// javascriptfunction multiply(num1, num2){
//     return num1 * num2
// }

let multiply =  (num1,num2) => (num1*num2)
console.log(multiply(3,4))




// Challenge 2 — Medium
// Create an object product with name and price. Add a method using normal function that prints "Product: [name], Price: [price]" using this. Then try the same with arrow function and see the difference.

let product = {
    name: 'Hero',
    price: 299,

    description: function(){
        console.log(` Product: ${this.name} , Price: ${this.price} `)

    }
}
product.description()



// Think
// Write an arrow function getUser that returns an object with name and age directly in one line. Call it and print the result.

let getUser = (name,age) => ({name: name, age: age})
console.log(getUser('Saurabh', 26))



// Create an object bankAccount with:

// ownerName: "Saurabh"
// balance: 5000
// A method deposit using normal function that takes an amount parameter, adds it to balance and prints "[ownerName] deposited [amount]. New balance is [balance]" using this
// A method withdraw using normal function that takes an amount parameter, checks if balance is enough, if yes deducts it and prints the new balance, if no prints "Insufficient balance"


let bankAccount = {
    ownerName: 'Saurabh',
    balance: 5000,

    deposit: function(amount){
       this.balance = amount + this.balance
        console.log(`${this.ownerName} deposited ${amount}. New balance is ${this.balance}`)
    },
    withdraw: function(amount){
        if(this.balance >= amount){
        this.balance = this.balance - amount
            console.log(` New Balance is ${this.balance}`)
        } else{
            console.log('Insufficient balance')
        }
    }
}
bankAccount.deposit(2000)
bankAccount.withdraw(4000)
bankAccount.withdraw(100000)
