// const userEmail = "abhi@gmail"


// if(userEmail){// koi comparsion nahi kiya bss maan liya ki ye truth hai 
//     console.log("got the email");
// }else{
//     console.log("don't have user email");
// }

// falsy value

// false, 0,-0, BigInt 0n, "", null , undefined , NaN

// Truthy values 

// "0",'false', " ",[], {}, function(){} // string ke andr aur koi empty function object and array are also truthy values
const userEmail = [];
if (userEmail.length === 0){
    console.log("Array is empty");
}
const emptyObj = {}

if (Object.keys(emptyObj).length=== 0){
console.log("object is empty");
}

