function countby(x,n){
    let result = [];
    for (let i=1; i<=n; i++){
        result .push(x*i)
    }
    return result
}

console.log(countby(1,10))
console.log(countby(2,10))