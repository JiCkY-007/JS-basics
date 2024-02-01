// singleton object

//const  tinderUser = new Object()

// NON singleTON OBJECT

const tinderUser = {}

tinderUser.id= "123abc"
tinderUser.name= "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname :{
            firstName: "Abhigyan",
            lastName: "Sinha"
        }
    }
}

//console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "c",4:"d"}
const obj4 = {3: "c",4:"d"}
const obj5 = {3: "c",4:"d"}

//agar {} nahi use karoge neeche toh saari valaue obj1 m chali jaaengi

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// jab database se value aati hai: Toh aese aatoi hai 
// array ke andr object
const users = [
    {
        id:1,
        email:"hello-world@google.com"
    }
]
users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
// above line ka output array hai means very easy to loop

// jab value exist na kare toh 
console.log(tinderUser.hasOwnProperty('isLogged'));


// VERY IMPORTANT DESTRUCTURING

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure:"hitesh"
}

// course.courseInstructor
const{courseInstructure: instructor}= course
console.log(instructor);

//