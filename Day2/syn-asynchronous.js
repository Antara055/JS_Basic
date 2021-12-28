function print(){
    console.log("print");
}
function display(){
    console.log("display")
}
function main(){
    console.log("main");
    new Promise((resolve,reject) => resolve("promise here!")).then(resolve => console.log(resolve));
    setTimeout(print,0);
    display();
    setTimeout(()=>console.log(5),1);
}
main();
