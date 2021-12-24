//const scoop in Js
const a=10;
function constScoop(){
    const a=11;
    //const a=15;
    //a=15;
    {
        console.log("inside block",a)
    }
    console.log("inside function",a)
}
console.log("outside function",a)
constScoop()