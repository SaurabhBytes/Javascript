console.log("2" > 1);   // True
console.log("02"> 0);     // True

console.log(null>0);     // False
console.log(null==0);     // False
console.log(null>=0);     // True

// The reason is that an equality check == and comparisons > < >= <= work differently
/* Comparisons convert null to a number, treating it as 0.
Thats why (3) null >= 0 is True and (1) null > 0 is false. */


console.log(undefined >= 0 )   // False
console.log(undefined > 0 )     // False
console.log(undefined == 0 )     // False
console.log(undefined < 0 )     // False


console.log("2" === 2)



