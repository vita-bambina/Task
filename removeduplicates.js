function distinct(a){
 return a.filter((num,index) => a.indexOf(num) === index)
}

console.log(distinct(["10","30","10","20"]))