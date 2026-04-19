
// object literals 

const age = Symbol('age')


const JsUser = {
    name : "Hitesh",
    [age]: 18,
    email: "hitesh@gmail.com",
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: [ "Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["location"]);
// console.log(JsUser[age]);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "hitesh@google.com"
// console.log(JsUser)




JsUser.greeting = function(){
    console.log("Hello Js User")
}

// console.log(JsUser.greeting());
JsUser.greeting()


JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
// console.log(JsUser.greetingTwo());
JsUser.greetingTwo()




