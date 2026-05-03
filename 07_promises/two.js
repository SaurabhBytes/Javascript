// async function fetchData(){
//     const promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('Data fetched')
        
//         }, 2000)
//     })

//     const data = await promise
//     console.log(data)
// } 
// fetchData()




async function fetchData() {
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            reject ('Something went wrong')
        }, 2000)
    })
    
     try{
        const data = await promise
        console.log(data)
     }catch(error){
        console.log(error)
     }
}