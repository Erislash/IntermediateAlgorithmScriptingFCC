function destroyer(arr) {
    let args = [...arguments];
    let seek = args[0];
    let destroy = [];
    for(let i = 1; i < args.length; i++){
        destroy.push(args[i]);
    }
    return seek.filter(n => destroy.indexOf(n) === -1);
}

function destroyer_2(arr) {
    let args = [...arguments].slice(1);
    return arr.filter(n => args.indexOf(n) === -1);
}

destroyer([1, 2, 3, 1, 4, 3], 2, 3);