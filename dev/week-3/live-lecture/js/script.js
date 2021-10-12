// Aaron Varga
// Intro to Development II
// Live Lecture
// October 11, 2021

// let stuff = [2,4,6,"bob",8,10,12];
// console.log(stuff.length);

// stuff.push(8);
// console.log(stuff);

// Remove last element from array
// stuff.pop();
// console.log(stuff);

// stuff.splice(0,4);
// console.log(stuff);

// let index = stuff.indexOf("bob");
// console.log(index);
// stuff.splice(index,1);
//console.log(stuff);

// stuff.splice(stuff.indexOf("bob"),1);
// console.log(stuff);

// let stuff = [4,7,"bob",10];
//
// stuff.pop();
// stuff.push(stuff[0]+1);
// stuff.splice(stuff.length-2,1);
// console.log(stuff);

// let stuff = [1,3,5];
//
// let crazy = stuff[1]+stuff.length; // 6
//
// stuff.splice(stuff[1]-3,1); // [3,5]
// stuff.push(crazy); // Add 6 - [3,5,6]
// stuff.push(stuff.indexOf(3)); // Add 0 - [3,5,6,0]
//
// console.log(stuff);

let names = "aaron,jeff,chris";

// String method
let namesArray = names.split(","); // Splits string into array by commas

namesArray.sort(); // Alphabetical by default

console.log(namesArray);























