const name = "abhigyan"
const repoCount = 50

//console.log(name + repoCount +" value ")


//string interpolation

console.log(`Hello my name is ${name} and 
my repo count is ${repoCount}`);

const gameName = new String('abhigyan')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "     jicky    "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://abhigyan.com/multi%20millionare"

console.log(url.replace('%20', '-'));
