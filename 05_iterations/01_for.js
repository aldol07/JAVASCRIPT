// for 

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);

}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop vakue : ${j}`);
        //console.log(i + '*' + j + ' = ' + i*j);   
    } 
}

let myarray = ["flash","superman","batman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);  
}


                                          
//break and continue
// for (let index = 1; index <= 20; index++) {
//     if(index == 5)  {
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`Value of i is : ${index}`);
     
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5)  {
        console.log(`detected 5`);
        continue
        
    }
    console.log(`Value of i is : ${index}`);
     
}