// console.log(2 > 1); // true
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // unpredictable result
// console.log("02" > 1);

console.log(null > 0); // avoid such cases
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0); // avoid such cases
console.log(undefined > 0);
console.log(undefined < 0);


// === strict check
console.log("2" === 2);
