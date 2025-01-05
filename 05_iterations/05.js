const coding  = ["js","cpp","python"]

coding.forEach(function (item) {
   //console.log(item);
    
}  )

coding.forEach( (item) => {
   //console.log(item);
    
})


// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach( (item,index,arr)   =>  {
//     console.log(item,index,arr);
    
// })

const mycoding = [
    {
        langname: "javascript",
        langfn: "js"
    },
    {
        langname: "python",
        langfn: "py"
    },
    {
        langname: "cpp",
        langfn: "cpp"
    }
]

mycoding.forEach( (item) =>{
    console.log(item.langname);
    
})