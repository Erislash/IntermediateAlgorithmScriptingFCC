function translatePigLatin(str) {
    let output = "";
    const vowels = 'aeiou';
    if(vowels.indexOf(str[0]) !== -1){
        output = (str + "way")
    }else{
        let consonants = "";
        for(let i = 0; vowels.indexOf(str[i]) === -1 && i < str.length; i++){
            consonants += str[i];
        }
        output = str.slice(consonants.length) + consonants + "ay";
    }
    return output;
}

function translatePigLatin_2(str) {
    const regex = /^[^aeiou]+/;
    const consonants = str.match(regex);
    return (consonants === null)
    ? (str + "way")
    : str.replace(regex, "")
    + consonants[0]
    + "ay"
}

function translatePigLatin_3(str) {
    return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/^([^aeiou]+)(\w*)/, "$2$1ay")
}
  
console.log(translatePigLatin_2("consonant"));