var higherOrder;
//accept function as argument or return function as their result
const greeting=()=>{
    return () => {
        console.log("hi")
    }
}
greeting();