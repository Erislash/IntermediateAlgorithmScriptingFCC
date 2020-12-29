function ExtractFromArr(...arr){
    let output = [];
    arr.forEach(e => {
        output.push(...e);
    });
    return(output);
}

function uniteUnique(...arr) {
    return Array.from(new Set(ExtractFromArr(...arr)));
}

function uniteUnique_2(arr){
    let output = [];
    const args = Array.from(arguments);

    for(let i = 0; i < args.length; i++){
        for(let j = 0; j < args[i].length; j++){
            if(!output.includes(args[i][j])) 
                output.push(args[i][j]);
        }
    }
    return output
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));