let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let newArr = arr.filter(item => item % 2 == 0)

console.log(newArr)



let users = [
    {name: 'Saurabh', age: 22},
    {name: 'Rahul', age: 16},
    {name: 'Priya', age: 25},
    {name: 'Rohan', age: 15}
]
let adults = users.filter(item => item.age > 18)
console.log(adults)





let products = [
    {name: 'Laptop', price: 50000, inStock: true},
    {name: 'Phone', price: 20000, inStock: false},
    {name: 'Tablet', price: 30000, inStock: true},
    {name: 'Watch', price: 5000, inStock: false},
    {name: 'TV', price: 80000, inStock: true}
]


let inStock = products.filter(item => item.inStock== true && item.price < 60000)
console.log(inStock)




let containsA = products.filter(item => item.name.includes('a'))
console.log(containsA)
