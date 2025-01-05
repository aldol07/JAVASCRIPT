////Arrays


const myArr = [0,1,2,3,4,5]

const mArr = Array(1,2,3,4)
//console.log(myArr[1]);

/////Array Methods 
// myArr.push(6)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);


//myArr.unshift(9)
//myArr.shift()


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// const mnArr = myArr.join()
// console.log(myArr);
// console.log(mnArr);

//slice , spice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("C ",myArr);