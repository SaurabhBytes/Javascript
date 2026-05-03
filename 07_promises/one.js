// const promise = new Promise(function(resolve,reject){
//     let isDataFetched = false
//     if(isDataFetched){
//         resolve('Data fetched successfully')
//     } else{
//         reject('error fetching data')
//     }
// })

// promise
// .then(function(data){
//     console.log(data)
// })
// .catch(function(error){
//     console.log(error)
// })


const promise = new Promise(function(resolve,reject){
    let isDataFetched = false
    setTimeout(function(){
        if(isDataFetched){
            resolve('data fetched after 2 seconds!')
        } else{
            reject('Error fetching data')
        }
    }, 2000)
})

promise.then(data=> console.log(data))
.catch(data => console.log(data))