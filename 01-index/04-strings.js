const name = "purva"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('purva-hc')

//console.log(gameName[0]);
//console.log(gameName.length);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "  purva  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://purva.com/purva%20shinde"

console.log(url.replace('%20', '-'))

console.log(url.includes('purva'))

console.log(gameName.split('-'));
