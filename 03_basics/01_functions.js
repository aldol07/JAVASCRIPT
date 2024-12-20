function saymyname(){

    console.log("k");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("k");
}


//saymyname()

// function add(num1,num2) {
//     console.log(num1+num2);
    
// }


//add(3,"4")
//add(3,null)
function add(num1,num2) {
    // let results = num1+num2
    // return results
    return num1+num2
}
const results = add(8,9)

//console.log("Result: ", results);

function loginusermessage(un= "sam"){
    if(!un){
        console.log("please enter un");
        return
    }
    return `${un} just logged in`
}

//console.log(loginusermessage("kartikay"));
//console.log(loginusermessage());


//rest spread operator
function calculatecartprice(...num1){
    return num1
}

//console.log(calculatecartprice(20,10,45));

const user = {
    username : "kartikay",
    price : "230",
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 321
})


const mynewarray = [200,221,321,456]
 
function returnsecvalue(getarray){
    return getarray[1]
}
//console.log(returnsecvalue(mynewarray));

console.log(returnsecvalue( [200,221,321,456]));


