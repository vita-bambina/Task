function convert (n){
    return n
    .toString()
    .split('')
    .map(Number)
    .reverse();
}
console.log(convert(1234));