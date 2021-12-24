//let scoop in Js
let b=5;
function letScoop(){
    {
        //let b=6;(error!)
        b=6
        console.log("inside blk",b)
    }
    //console.log("inside blk",b)
}
letScoop()