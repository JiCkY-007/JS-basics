const coding = ["js", "ruby", "java", "python", "cpp"]

// foreach is higher order function 

// callback function do not have name 
// coding.forEach( function(item) {
//     console.log(item);
// })

// coding.forEach( (item) =>{
// console.log(item);
// })

// function printMe(item){
// console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);

// })

const myCoding = [
    {
        languageName: "javaScript",
        shortName: "JS"
    },
    {
        languageName: "python",
        shortName: "PY"
    },
    {
        languageName: "java",
        shortName: "Java"
    }
]
// Very IMP
myCoding.forEach((item)=>{
    console.log(item.shortName);
})