String.prototype.toASCII = function(){
    return this.charCodeAt(0);
}
String.prototype.toNextASCII = function(){
    return (this.charCodeAt(0) + 1);
}

// function fearNotLetter(str) {
//     let missing;
//     str.split("").forEach((l, idx) => {
//         if(idx != 0){
//             if(l.toASCII() !== ((str[idx - 1]).toASCII() + 1)){
//                 missing = String.fromCharCode((str[idx - 1]).toASCII() + 1)
//             }
//         }
//     });
//     return missing
// }

// function fearNotLetter(str) {
//     let missing;
//     let prevLetter = str[0];

//     for(let i = 1; i < str.length; i++){
//         if(str[i - 1].toNextASCII() !== str[i].toASCII())
//             missing = String.fromCharCode(str[i - 1].toNextASCII());
//     }
//     return missing
// }

function fearNotLetter(str) {
    let missing;
    let compareLetterASCII = str[0].toASCII();

    for(let i = 0; i < str.length; i++){
        if(str[i].toASCII() !== compareLetterASCII){
            missing = String.fromCharCode(compareLetterASCII);
            break;
        }
        compareLetterASCII++
    }
    return missing
}
  
console.log(fearNotLetter("abcdefghjklmn"));