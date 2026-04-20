let myName = 'Saurabh'

function printName(){
    console.log(myName)
}
printName()

console.log(myName)


function myFunction(){
    let secret  = 'hello'
    console.log(secret)
}

myFunction()
// console.log(secret)       it doesnt print here.



{
    let a = 23
    var b = 34
    console.log(a)
    console.log(b)
}

// console.log(a)    // Not printed cause outside of block
console.log(b)       // This got printed because var doesnt respect the blocks scoping.



function outer(){
    let outerVar = 'I am outer'
    function inner(){
        let innerVar = 'I am inner'
        console.log(outerVar)

    }
    inner()
    console.log(innerVar)


}
outer()

