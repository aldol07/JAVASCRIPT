const useremail = "kd.com"
if(useremail){
   // console.log("got useremail");    
}
else {
   // console.log("Dont have useremail");
    
}

//falsy values +++++++++++

// false 
// 0
// -0
// BigInt 0n
// ""
// nullundefined
// Nan


// truthy values----------

// "0"
// 'false'
// " "
// []
// {}
// function(){}

// const useremail1 = []
// if(useremail1.length === 0){
//     console.log(" array useremail1 is empty");    
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
    
// }

//+++++++++++++++++++++++++++++++++++++++
// Nullish Coalescing Operator (??) : null undefined 

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


//onsole.log(val1);

//++++++++++++++++
//Terniary Operator

//conditon ? true : false

const icetprice = 100
icetprice <= 80 ? console.log("less than 80") : console.log("more than 80");


