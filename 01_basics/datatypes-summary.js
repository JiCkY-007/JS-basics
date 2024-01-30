//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

/*

 JavaScript is a dynamically typed language,
 which means that data types of variables are
 determined by the value they hold at runtime
 and can change throughout the program as we 
 assign different values to them.
 
*/

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (Primitive), Heap (Non-Primitive)

//stack 

let myCollegeName = "abhigyan.sinha.iitm@gmail.com"

let anotherName = myCollegeName
anotherName = "chai-aur-code"

console.log(myCollegeName);
console.log(anotherName); // yaha pe value pass hoti copy se isliye value change ni hoti

//heap

let userOne = {
    email: "user@google.com",
    upi:"userOne@upi"
}

let userTwo = userOne

userTwo.email = "cr7sinha@gmail.com"

console.log(userOne.email);
console.log(userTwo.email); // yaha pe value pass hoti hai reference se isliye change hojati hai 


