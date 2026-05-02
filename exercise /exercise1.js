// Easy 🟢
// Create an array of 5 numbers. Filter out all numbers greater than 3 and store them in a new variable. Print both original and new array.

let arr = [1,2,3,4,5]


function biggerNum(big){
    return big > 3
}


let arr1 = arr.filter(biggerNum);

console.log(arr1)
console.log(arr)


// Easy 🟢 (Revised)
// Create an array of 5 of your favourite foods. Print the first and last item using their index. Then add one more food at the end and remove the first one. Print the final array.

let favouriteFoods = ["bhel","samosa", "chaat","Chole bhature", "Pani puri"]

console.log(favouriteFoods[0])
console.log(favouriteFoods[4])

favouriteFoods.push('Kachori')
favouriteFoods.shift()
console.log(favouriteFoods)


// Medium 🟡
// Create an object student with name, age, marks. Write a function that takes this object, checks if marks are above 60 and returns "[name] has passed with [marks] marks" or "[name] has failed". Call it by passing the object directly.


let student ={
    name: 'Saurabh',
    age: 25,
    marks: 45
}

function myFunction(anyStudent){
    if(anyStudent.marks > 60){
        console.log(`${anyStudent.name} has passed with ${anyStudent.marks}`)
        
    }else{
        console.log( ` ${anyStudent.name} has failed`)
        
    }
}

myFunction(student)



// Hard 🔴
// Create two objects user1 and user2 each with name, age and city. Merge them into a third object using spread operator. Then destructure name and city from the merged object and print them. Also check if age exists in the merged object using hasOwnProperty.

let user1 = {
    name: 'Ritesh',
    age: 43,
    city: 'Delhi'
}

let user2 = {
    name1: 'Rahul',
    age1: 46,
    city1: 'Mumbai'
}

let user3 = {...user1, ...user2}

let  {name, name1, city, city1} = user3
console.log(name)
console.log(name1)
console.log(city)
console.log(city1)


console.log(user3.hasOwnProperty('age'))

