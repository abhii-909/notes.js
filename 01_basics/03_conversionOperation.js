let score = "63abc"

// console.log(typeof score);
// or
// console.log(typeof (score));

let valueInNum = Number(score)
// console.log(typeof valueInNum);
// console.log(valueInNum);

// "33" = 33
// "33abc" = NaN
// true = 1; false = 0

let isLoggedIN = 1

let boolIsLoggedIn = Boolean(isLoggedIN)
// console.log(boolIsLoggedIN);

// 1 => true; 0 => false
// "" => false; "ddfds" = true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************** OPERATIONS ****************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); //power
// console.log(2/3);
// console.log(2%3); // remainder

let str1 = "hello"
let str2 = " abhii"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); // 32

// console.log(+true); // 1
// console.log(+""); // 0
// but this should never be used

let counter = 100
counter++ // postfix
++counter //prefix
console.log(counter);

