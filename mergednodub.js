function mergeArrays(arr1, arr2) {
  const merged= [...arr1,...arr2]
    const setArray = new Set (merged);
    const sorted = [...setArray].sort ((a,b)=> a-b);
    
    return sorted
  
}
console.log(mergeArrays ( [1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
console.log(mergeArrays ( [1, 3, 8, 7, 9], [10, 8, 6, 4, 2]))
console.log(mergeArrays ([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
  
