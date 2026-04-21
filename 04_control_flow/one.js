// if 


const temperature = 41

// if(temperature === 41){
//     console.log('Less than 50')
// }else{
//     console.log('Temperature is greater than 50')
// }


const score = 200

// if(score>100){
//     const power = 'fly'
//     console.log(`User power: ${power}`)
// }


const balance = 1000

// if(balance>999){
//     console.log('U are rich')
// }else{
//     console.log('U are poor')
// }



// if(balance < 500){
//     console.log('less than 500. POOR MAN ')
// }else if(balance < 750){
//     console.log('less than 750 but greater than 500')
// }else if(balance < 900){
//     console.log('less than 900 but greater than 750')
// }else{
//     console.log('U are hell rich. RICH BOYYYYY!')
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log('Allow to buy course');
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log('user logged in')
}
