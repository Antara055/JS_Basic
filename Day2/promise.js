const prompt = require('prompt-sync')();
let temp=0;
function prime(){
    return new Promise(function(resolve,reject){
        let no=prompt('Enter the number');
        for(let i=2;i<no;i++){
            if(no % i==0){
                temp=1;
                break;
            }
        }
        if(temp==1){
            console.log("not prime");
            resolve();
        }
        else{
            console.log("prime");
            reject();
        }
    })
}
prime().then(function(){
    console.log("resolved");
}).catch(function(){
    console.log("rejected");
})