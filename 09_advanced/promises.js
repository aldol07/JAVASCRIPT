const promise1 = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed ");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"KD",email:"ebn.com"})

    },1000)
})
promise3.then(function(user){
    console.log(user);

})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"kd",password:"123"})
        }
        else{
            reject('Error:something went wrong')
        }
    },1000)
})
promise4.then((user) => {
    console.log(user);
    return user.usernameS
    
}).then((username) => {
    console.log(username);
    

}).catch(function(error){
    console.log(error);
    
}).finally(() => {
    console.log("the promise is resolved/rejected");
    

})


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"html",password:"123"})
        }
        else{
            reject('Error:html went wrong')
        }
    },1000)
})

async function consumePromise5(params) {
    try {
        const response = await promise5
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}
consumePromise5()

