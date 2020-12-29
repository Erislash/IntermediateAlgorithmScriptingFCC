function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => {
      for(let i = 0; i < sourceKeys.length; i++){
          if(!obj[sourceKeys[i]] || source[sourceKeys[i]] !== obj[sourceKeys[i]])
              return false
      }   
      return true
  });
}

function whatIsInAName_2(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => {
      return sourceKeys.every(key => Boolean(obj[key]) && obj[key] === source[key]);
  });
}
  
console.log(whatIsInAName_2([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, {first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));