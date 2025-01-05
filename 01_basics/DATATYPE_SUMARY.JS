//PRIMITIVE

// 7  types : String, Number , Boolean, Null, Undefined, Symbol, BigInt

const score = 10.3
const isLoggedIn = false
const temp = null
let userMail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id==anotherID);

const bigNumber = 2214352113225487423n







// Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "batman", "padman"];

let myObj = {
    name: "Ram",
    age: 21,
}

// const myFunction = function(){
//     console.log("Hello");
    
// }

// console.log(typeof bigNumber);




// ++++++++++++++++++++++++++++++++++++


// Stack(Primitive) , Heap(Non-Primitive)


let myYTname = "Aughad"

let anothername = myYTname
anothername = "LoFi"

console.log(myYTname);
console.log(anothername);

let user1= {
    email: "userMail.com",
    upi: "ybl",

}
let user2 = user1

user2.email = "dk@gmail.com"

console.log(user1.email);
console.log(user2.email);

