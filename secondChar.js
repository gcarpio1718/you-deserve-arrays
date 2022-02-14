const prompt = require('prompt-sync');

var n = JSON.parse((prompt("Enter words: ")));

let thirdItem = n[2];
let secondChar = thirdItem[1];

if (typeof thirdItem === 'string'){
    console.log (secondChar)
}else
    if (typeof thirdItem !== 'string'){
        console.log("error")
    }