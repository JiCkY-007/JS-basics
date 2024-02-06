const buttons = document.querySelectorAll('.button');//.use karo taaki class button select ho 

const body = document.querySelector('body')

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);//.target : used to get the current value of the input
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
   
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
   
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
   
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
   
    })  
}) 