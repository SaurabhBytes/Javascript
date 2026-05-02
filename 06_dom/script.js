// const title = document.querySelector('#title')
// // console.log(title)

// // title.innerHTML = 'Changed by Javascript'
// // title.innerText = 'Changed by Javascript'

// // innerHTML — treats string as HTML, renders tags
// // title.innerHTML = '<b> Hello </b>'    // shows → Hello (bold)

// // innerText — treats string as plain text, shows everything
// // title.innerText = '<b> Hello from innerText</b>'     // shows → <b>Hello</b>


// // title.style.color = 'red'
// // title.style.backgroundColor = 'yellow'
// // title.style.fontSize = '50px'
// // title.style.fontWeight = 'bold'



// // get the current attribute value
// // console.log(title.getAttribute('id'))   getAttribute → reads attribute → shows in console


// // change or add an attribute
// // title.setAttribute('id', 'newTitle')
// // title.setAttribute('class', 'headingClass')   setAttribute → changes attribute → shows in inspector



// // Creates a new element
// const newDiv = document.createElement('div')
// // console.log(newDiv)


// // add text to it
// newDiv.innerText = 'I was created by Javascript'

// // add a class to it
// newDiv.setAttribute('class', 'myDiv')

// // Now add it to the page
// document.body.appendChild(newDiv)



// // // select the element you want to remove
// // const para = document.querySelector('.para')
// // // remove it
// // para.remove()

// // querySelector always grabs only first matching element

// // to remove both paras you'd need to use querySelectorAll and loop through them
// // const paras = document.querySelectorAll('.para')
// // paras.forEach(para => para.remove())


// EVENTS

// const btn = document.querySelector('#btn')

// btn.addEventListener('click', function(){
// console.log('Button clicked')
// })

// btn.addEventListener('click', function(e){
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.id)
//     console.log(e.type)
//     console.log(e.timeStamp)
//     })

// const form = document.querySelector('#myForm')

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log('Form submitted')
// })


const ul = document.querySelector('ul')

// get children
console.log(ul.children)           // all li items
console.log(ul.children[0])        // first li
console.log(ul.children[0].innerText)        //text of first li


// get parent
const li = document.querySelector('li')
console.log(li.parentElement)                        // ul

// get siblings
console.log((li.nextElementSibling))
console.log(li.previousElementSibling)




