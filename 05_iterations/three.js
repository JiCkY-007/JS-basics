// for of 
//  - Array specific
// [{},{},{}]
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings){
   // console.log(`Each char is ${greet}`);
}

// Maps 

const map = new Map()
map.set('IN', "INDIA")
map.set("US" , "United states")
map.set("fr", "france")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', 'value');
    
}

// for of for objects

const myObject = {
    'game1': 'nfs',
    'game2': 'valo'
}

for (const iterator of myObject) {
    console.log(key, ':-', 'value');
}
