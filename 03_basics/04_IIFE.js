// Immediately Invoked function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//named IIFE 
 
//(FIRST WALA function ke liye)
// Why IIFE ?
/* 

Global scope ke variables se kayi baar pollution 
hota hai 
toh waha ke variable ya jo bhi waha declarations hai
uske pollution ko hata ne ke liye humne IIFE use kiya 


USE SEMICOLON TO END IT

*/

(()=>{
    console.log("DB Connected 2");
})();

((name)=>{
    //parameter wala iife(ify)
    console.log(`DB Connected 2 ${name}`);
})('Abhigyan');

