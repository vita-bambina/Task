function countPositivesSumNegatives(input){
    if (!input || input.length === 0)return [];
    let count = 0;
    let sum = 0;
    for (let num of input){
        if (num < 0){
            sum += num
    } else if (num > 0){
        count ++
        
    } 
}

return [count,sum];




}
console.log(countPositivesSumNegatives([1,-2,3,4,-9]));
console.log(countPositivesSumNegatives([]));