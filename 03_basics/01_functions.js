function addTwoNumbers (num1,num2){
    let result = num1 + num2
    return result
}

let result = (addTwoNumbers(5,6))
// console.log("Result: ", result)



function loginUserMessage(username){
    if (username === undefined){
        // console.log('Enter a username')
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Saurabh'));
// console.log(loginUserMessage());


function calculateCartPrice(...num1){              // ... this is rest operator similar syntax like spread operator but different wokring 
    return num1

}
console.log(calculateCartPrice(100,200,300, 4000))



const userName = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(userName)

handleObject({
    username: 'hitesh',
    price: 399
})


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,300,400,500]))





