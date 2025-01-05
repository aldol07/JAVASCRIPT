//DATE 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//let mycreateDate = new Date(2024,0,20,3)

//let mycreateDate = new Date("2024-01-01")
let mycreateDate = new Date("02-01-2001")
// console.log(mycreateDate.toDateString());
// console.log(mycreateDate.toLocaleDateString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate.getMonth()+1);
console.log(newdate.getDate());



newdate.toLocaleDateString('default', {
    weekday: "long",
}

)