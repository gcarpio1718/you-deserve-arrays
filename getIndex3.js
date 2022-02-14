const prompt = require('prompt-sync')({sigint: true});

let userArray = JSON.parse(prompt("Enter and array: "));

let firstItem = userArray[0];
let fourthItem = userArray[3];
let arrayLength = userArray.length;
let lastItem = userArray[arrayLength-1];

if (arrayLength >= 3){
    console.log("The third index in this array is: " + fourthItem);
}else{
    console.log("The last index in the array is: " + lastItem);
}