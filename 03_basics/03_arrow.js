const user = {
    ussername: "hitesh",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.ussername} , welcome to website`)

        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)


// function chai(){
//     let username = 'hitesh'
//     console.log(this.username);          // this cant be used inside of fucntion it only works in objects
// }
// chai()


// const chai = () => {
//     let username = 'hitesh'
//     console.log(this);
// }

// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4))


// const addTwo = (num1,num2) =>  (num1+num2)

const addTwo = (num1,num2) =>  ({userName: 'hitesh'})

console.log(addTwo(3,4))


