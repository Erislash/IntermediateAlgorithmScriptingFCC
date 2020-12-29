function Pairs(){};
Pairs.prototype.AddPair = function(a, b){
  this[a] = b
  this[b] = a
};

const pairs = new Pairs(); 

pairs.AddPair('C', 'G');
pairs.AddPair('A', 'T');

function pairElement(str) {
  return str.split('').map(letter => [letter, pairs[letter]])
}

console.log(pairElement("GCG"));