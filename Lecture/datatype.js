//Primitive data types

//String
let Name = "Ravi";
console.log(`My string is ${Name}`);
console.log('My string is ' + Name);
console.log("Data type of name is " + (typeof name));

//Number
let marks = 45;
console.log("Data type of marks is " + (typeof marks));

//Boolean
let isDriver = true;
console.log("Data type of isDriver is " + (typeof isDriver));

//Null
let nullVar = null;
console.log("Data type of nullVar is " + (typeof nullVar));

//Undefined
let x;
console.log("Data type of x is " + (typeof x));

//BigInt
let num = 1245912349853456735734753737357334573474356375367334573754356734573473567323673675673457374573634563475634745623456324562346734734482398;
console.log("Data type of num is " + (typeof num));
console.log(num);


//Reference datatype

//Array
let myarr = [1,2,3,4,false,'ravi'];
console.log(myarr);
console.log("Data type of myarr is " + (typeof myarr));


//Object literals
let stmark = {
    harry:34,
    ravi:45,
    ram:23,
    sira:42,
    'Radha shyam':45
};
console.log(stmark);
console.log(typeof stmark);

//function
function findName(){

}
console.log(typeof findName);

//date
let date = new Date();
console.log(date);
console.log(typeof date);
