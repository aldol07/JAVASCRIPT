const user = {
    un: "kartik",
    price: 33,

    welcomeMessage: function(){
        console.log(`${this.un},welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.un = "Sam"
// user.welcomeMessage()

//console.log(this);
// function chai(){
//     let un = "kartik"
//     console.log(this.un);
    
// }
// chai()


// const chai = function() {
//     let un = "kartik"
//     console.log(this.un);
// }

const chai = () => {
    let un = "kartik"
    console.log(this.un);
}

//chai()


// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
//const addtwo = (num1,num2) => num1 + num2

//const addtwo = (num1,num2) => (num1 + num2)

const addtwo = (num1,num2) => ({username: "kartik"})

console.log(addtwo(3,4));

const myarr = [1,2,3,4]
//myarr.forEach()


