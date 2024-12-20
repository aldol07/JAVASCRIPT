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
console.log(loginusermessage());

