const user = {
    username: "kd",
    logincount: 8,
    signedIn: true,
    getuserdetail: function(){
        //console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// //console.log(user.getuserdetail());
// console.log(this);

// const promise1 = new Promise()
// const date = new Date()
function User(username,logincount,signedIn){
    this.username = username;
    this.logincount = logincount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    //return this
}

const user1 = new User("kd",23,false)
const user2 = new User("bd", 34,true)
console.log(user1.constructor);

