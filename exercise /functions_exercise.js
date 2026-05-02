// Challenge 1 — Easy
// Write a function greetUser that takes a name parameter. If no name is passed print "Please enter a name" otherwise return "Hello [name]!". Test both cases.

function greetUser (name){
    if(name=== undefined){
        console.log('Please enter a name')
        return

    }
return ` Hello ${name} !`
}
console.log(greetUser('saurabh'))
greetUser()


// Challenge 2 — Medium
// Write a function totalBill using rest operator that takes any number of prices and returns their total sum. Test it with at least 4 numbers.


function totalBill (...num1){
    let total = num1[0] + num1[1]+num1[2]+num1[3]
    return total
    
}
console.log(totalBill(100,200,300,400))




// Challenge 3 — Think
// Write a function getDetails that takes an object with name, age and city. Return a sentence using all three values. Call it by passing the object directly inside the function call instead of creating a variable first.

function getDetails(mainObject){
console.log(`Hello myself ${mainObject.name} and I live in ${mainObject.city}.I'm ${mainObject.age} years old`)
}
getDetails({
    name: 'Saurabh Tiwari',
    age: 22,
    city: 'Bilaspur'
})