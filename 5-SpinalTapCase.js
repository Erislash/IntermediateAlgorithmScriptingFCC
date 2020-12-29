// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    const regex = new RegExp(/\s(?=\w)|_(?=\w)|(?=[A-Z])|-/, "g");
    return(str.split(regex).map(word => word.toLowerCase()).join("-"))
}
function spinalCase_2(str) {
    const regex = new RegExp(/\s+|_+/, "g");
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("AllThe-small Things")
spinalCase("thisIsSpinalTap")