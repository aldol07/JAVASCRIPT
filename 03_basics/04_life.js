// Immediately Invoked function Expression (IIFE)

(function chai(){
    console.log(`DB Connected`);
    
})();
//chai()

((name) => {
    console.log(`DB Connected23 ${name}`);
    
}) ('Kartik')