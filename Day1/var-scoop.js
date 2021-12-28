//var scoop in Js
var a=10;
function varScoop(){
    var a=11;
    var a=15;
    {
        console.log("inside block",a)
    }
    console.log("inside function",a)
}
console.log("outside function",a)
varScoop()