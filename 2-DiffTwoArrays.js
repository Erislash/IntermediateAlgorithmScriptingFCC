function diffArray(arr1, arr2) {
    let output = [];
    let allNums = new Set([...arr1, ...arr2]);
    allNums.forEach(e => {
        if(arr1.indexOf(e) == -1 || arr2.indexOf(e) == -1)
        output.push(e);
    });
    return output
}

function diffArray_2(arr1, arr2) {
    let output = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) === -1) output.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) === -1) output.push(arr2[i]);
    }
    return output
}

function diffArray_3(arr1, arr2) {
    return arr1.filter(n => arr2.indexOf(n) === -1)
            .concat(arr2.filter(n => arr1.indexOf(n) === -1))
}

function diffArray_4(arr1, arr2) {
    return arr1.concat(arr2)
    .filter(n => (arr1.indexOf(n) === -1 || arr2.indexOf(n) === -1))
}
  
diffArray([1, 2, 3, 5, 12], [1, 2, 3, 4, 5, 9, 12]);