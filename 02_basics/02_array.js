const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// Concat 
const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


// Using spread operator to combine arrays

const all_newHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_newHeroes)


const another_array = [1,2,3,[4,5,6], 7, [6,7, [4,5]]]

const real_anotherArray = another_array.flat(Infinity)
// console.log(real_anotherArray)


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))







