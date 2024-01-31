// Array 

const myArr = [1,2,3,5,6,7]
const myHeroes = ["iron man", "bat man "]

const myArr2 = new Array(1,2,3,4)

console.log(myArr2[1]);
console.log(myArr[0]);

// Shallow copies and deep copies 
// shallow - copy of an object whose properties 
// share the same references 
// deep - properties do not share the same refrerence

// Array Methods

// myArr.push(99)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

// Slice: original array ko manipulated nahi krta , Splice:original array ko manipulate krta hai 

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1,3)

console.log("C ", myArr);
console.log(myn2);

