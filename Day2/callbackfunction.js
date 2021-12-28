// A callback function is a function passed as an argument to another function
//it executed after another function has finished execution
function mul(a,b,callback){
    console.log(a*b);
    setTimeout(()=>{
        console.log(a+b);
        console.log("addition");
    },1000);
    callback();
}
function msg(){
    console.log("multiplication");
}
mul(2,3,msg)