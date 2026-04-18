//  array


const myArr = [0,1,4,5,7]           // Js arrays are resizable and can contain a mix of different data types.
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.pop(7)
// myArr.shift()
// myArr.unshift(9)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(4))


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr)



// slice ,  splice


console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1)
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log("C",  myArr);

console.log(myn2);



