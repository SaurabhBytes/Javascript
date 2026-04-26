const count = document.querySelector('#count')

const increaseBtn = document.querySelector('#increaseBtn')
const decreaseBtn = document.querySelector('#decreaseBtn')
const resetBtn = document.querySelector('#resetBtn')


increaseBtn.addEventListener('click', function(){
    counter++
    count.innerText = counter
})

decreaseBtn.addEventListener('click', function(){
    if(counter > 0){
        counter--
        count.innerText = counter
    }

})

resetBtn.addEventListener('click', function(){
    counter = 0
    count.innerText = counter
})