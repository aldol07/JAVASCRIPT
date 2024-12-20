const name = "hitesh"
const repoCount = 50

 //console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kdmsdf-fc-com')

//console.log(gameName[1]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)

const newString1 = "  kdms  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://kd.com/%20chaudhry"

console.log(url.replace('%20','-'));

console.log(url.includes('kd'));

console.log(gameName.split('-'));

