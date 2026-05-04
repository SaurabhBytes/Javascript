// fetch ('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())         // First .then() — converts raw response to readable JSON
// .then(data => console.log(data))          // Second .then() — now you have actual data to use
// .catch(error => console.log(error))



//  fetch('https://jsonplaceholder.typicode.com/users')
//  .then(response => response.json())
//  .then(data => {
//     const userList = document.querySelector('#userList')
//     data.forEach(user => {
//         const li = document.createElement('li')
//         li.innerText = user.name
//         userList.appendChild(li)
//     });
//  })

//  .catch(error => console.log(error))






  // Trying with Async/Await
  
  async function fetchData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        const userList = document.querySelector('#userList')
        data.forEach(person => {
            const li = document.createElement('li')
            li.innerText= `${person.name}  - \t  ${person.email}`
            

            userList.appendChild(li)
        })
} catch(error){
    console.log(error)
}
  }

  fetchData()
