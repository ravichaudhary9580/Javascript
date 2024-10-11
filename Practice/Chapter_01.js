//Program 1
//Create a variable of type string and try to add a number to it.
let a = 55, b = 'hello';
console.log(a+b);
let str;
str = a+b;

//Program 2
//Use typeof operator to find the datatype of the string in last question.
console.log(typeof (a+b));
console.log(typeof str);


//Program 3
//Create a const object in JavaScript. Can you chage it to hold a number later?
const newObj = {
    Ram:1,
    Radha:2,
    Ramesh:3,
    Ranjeet:4
};
console.log(newObj);
console.log(typeof newObj);
Ram=2;
console.log(typeof newObj.Ram);
newObj.Ram=5; //const object can change its value by calling its member variable
// newObj = 388;//const object can not change its type
console.log(newObj);
/* const newObj = {
    Ravi:6,
    } */ //const object can not be redecleared

const box = 'Ravi';
console.log(typeof box);
// box = 45; //error You can not change a const object type

//Program 4
//Try to add a new key to the const object in Problem 3. Were you able to do it?
newObj['Ravi'] = 6; 
newObj['Radha'] = 45; 
console.log(newObj);

//Program 5
//Write a Js program to create a word - meaning dictonary of 5 words.
let myDict = {
    Hello:'It is used to greet in English',
    Green:'It is color of Nature',
    Computer:'It is computing device used to compute data',
    Car:'It is machine used to travel',
    Drone:'It is Flying vehicle used in many areas'
};
console.log(myDict);
console.log(myDict.Computer);
console.log("Car: " + myDict.Car);
