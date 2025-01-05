//const tinderuser  = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "kd"
tinderuser.isLoggedIn = "false"

//console.log(tinderuser);

const regularuser = {
    email: "ad@.com",
    fullname:{
        userfullname: {
            fname: "kartikay",
            lname: "dubey",
        }
    }
}
//console.log(regularuser.fullname.userfullname.fname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2} //mostly used
//console.log(obj3);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));

// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));




const course  = {
    coursename: "js in hindi",
    price: "333",
    courseinstructor: "hitesh"
}

//course.courseinstructor

const {courseinstructor:instructor} = course
//console.log(courseinstructor);
console.log(instructor);


// const navbar = ({company}) => {

// }

// navbar(company = "kartikay")

///API++++++++++++++

// {
//     name: "kartikay",
//     coursen: "js in hindi",
//     pricen: "201"
// }

[
    {},
    {}
]