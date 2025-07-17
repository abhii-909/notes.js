// ************  DATATYPES SUMMARY *************

// PRIMITIVE

// 7 TYPES: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

const bigNumber = 2344565563422314354n



// REFERENCE (NON-PRIMITIVE)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name:"abhii",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello World");
}

// console.log(typeof outsideTemp);


// **********************************************************


// STACK (PRIMITIVE) -> copy milta hai, HEAP (NON-PRIMITIVE) -> reference milta hai

let myname = "abbhinavMishra"

let anotherName = myname
anotherName = "newName"

console.log(myname);
console.log(anotherName);

// heap implementation
let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "abhii@google.com"

console.log(user1.email);
console.log(user2.email);

