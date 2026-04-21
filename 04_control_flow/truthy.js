const userEmail = 'hello@gmail.com'

if(userEmail){
    console.log('Got user email')
}else{
    console.log("Don't have user email")
}

// TRUTHY VALUES 

// false, 0, -0, BigInt 0n, "", null , undefined, NaN 

// TRUTHY VALUES

// "0", "false", " ", [], {},  function(){} 


if(userEmail.length === 0 ){
    console.log('array is empty')
}


const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
console.log('Object is empty')
}