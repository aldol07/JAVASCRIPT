// let myname = "kartik      "
// let mychannel = "aughadbaab    "

// console.log(myname.length);

let myheros = ["spman","thor"]
let heropower = {
    spman:"sling",
    thor:"hammer",
    getspmanpower: function(){
        console.log(`Spidey power is ${this.spman}`);
        
    }
}

Array.prototype.heykartik = function(){
    console.log(`Hitesh says hello`);
    
}

Object.prototype.kartik = function(){
    console.log(`kd is present in all objects`);  
}
//heropower.kartik()
//myheros.kartik()
//myheros.heykartik()
//heropower.heykartik()


//inheritance


const user = {
    name: "chai",
    email: "cbds.com"
}

const teacher = {
    makevideo : true
}
const teachingsupport = {
    isavailable: false 
}
const tasupport = {
    makeassignment: "JS",
    fulltime: true,
    __proto__: teachingsupport

}
teacher.__proto__ = user

//Moders syntax

Object.setPrototypeOf(teachingsupport,teacher)


let anotherun  = "chaiaurcode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`true length is ${this.trim().length}`);
    
    
    
}
anotherun.trueLength()

"kartik".trueLength()
"dghasj  ".trueLength()