const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hitesh",
            lastname: "Choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = Object.assign({}, obj1, obj2)     // {}  this acts as empty object which is a target and other objects act as a source
                                                // If we dont give this{} its not an error but then target is the first object written and all other goes inside it.

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id : 21,
        email: "Hello@gmail.com"
    },
    {

    },
    {

    }
]

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))


