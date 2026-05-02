const btn = document.querySelector('#btn')
const colorCode = document.querySelector('#colorCode')

btn.addEventListener('click', function(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215). toString(16)
    document.body.style.backgroundColor = randomColor
    colorCode.innerText = 'Color: ' + randomColor
})

