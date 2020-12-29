function myReplace(str, before, after) {
    before = str.match(new RegExp(`${before}`, "i"))[0];
    if(before[0].match(/[A-Z]/))
        after = after[0].toUpperCase() + after.slice(1);
    else
        after = after[0].toLowerCase() + after.slice(1);

    return str.replace(new RegExp(`${before}`, "gi"), after)
}
  
myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");