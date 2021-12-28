const xyz = () => {
    return new Promise((resolve, reject) => {
        let flag = true;
        if (flag) {
            resolve(abc());
        } else {
            reject("promise rejected");
        }
    })
}
var abc = () => {
    let a = 2;
    let b = 2
    let ab = a + b;
    console.log("addition", ab)
    return ab;
    }


xyz().then(value => console.log("promise reslove successfull", value))
    .catch(erro => console.log(erro));