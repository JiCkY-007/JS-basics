function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("G");
    console.log("Y");
    console.log("A");
    console.log("N");
}
//sayMyName()

// function addTwoNum (num1, num2){
// console.log(num1 + num2);
// }
function addTwoNum (num1, num2){
    // let result = num1 + num2
    // return result;
    return num1+ num2
    }

const result = addTwoNum(3,5)
// console.log(typeof(result));

function loginUserMessage(username){
    return `${username} just Logged in `
}

console.log(loginUserMessage("Abhigyan"));
console.log(loginUserMessage());//undefined

function loginUser2Message(username){
    if(username === undefined){// if (!username) : same meaning as using  ===
        console.log("please enter a valid username");
        return
    }
    return `${username} just Logged in `
}
console.log(loginUser2Message());

// ek default value dena 
// just like do while
// function loginUser2Message(username="sam"){
//     if(username === undefined){// if (!username) : same meaning as using  ===
//         console.log("please enter a valid username");
//         return
//     }
//     return `${username} just Logged in `
// }
// console.log(loginUser2Message());



