const user = {
    username: " abhigyan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the webiste`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "spidey"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username= "Abhigyan"
//     console.log(this);
// }
// const coffee = function (){
//     let username= "Abhigyan"
//     console.log(this);
// }

// coffee()

// arrow functions

const coffee = () => {
    let username = "Abhigyan"
    console.log(this);
}
// coffee()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
//implicit return main maan leta hu aapko return likhne ki zarurat nahi hai

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)
// curly braces me wrap kara toh return karna hi padega

console.log(addTwo(3,4));

// myArray = [2,3,4,5,6,7]