//singleton
Object.create


/// objects literals

const mySym  = Symbol("key1")

const Jsuser = {
    "full name": "kartikay dubey",
    name : "kartikay",
    [mySym]: "mykey1",
    age : 20,
    location : "kd.com",
    email: "pryj",
    isLoggedIn: false,
    lastlogindays : ["monday","saturday"]

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);

// console.log(Jsuser[mySym]);


// Jsuser.email = "chtgpt.com"

// Object.freeze(Jsuser)
// Jsuser.email = "mscroft.com"
// console.log(Jsuser);



Jsuser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(Jsuser.greeting());

Jsuser.greeting2 = function(){
    console.log("Hello JS User");
    
}
console.log(Jsuser.greeting2());