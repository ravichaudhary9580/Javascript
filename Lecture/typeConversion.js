//type conversion 
let myVar;
// myVar= 34;
myVar= String(34);
console.log(myVar,(typeof myVar));

// let booleanVar = true;
let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = new Date();
console.log(date,(typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length,(typeof arr));

let stri = Number("35234");
stri = Number("234hd3");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
console.log(stri);

let number = parseFloat('234.35');
console.log(number,(typeof number));
console.log(number.toFixed(3),(typeof number));


// type coersion

let mystr = '693';
// let mystr = Number('693');
let mynum = 34;

console.log(mystr + mynum,(typeof (mystr + mynum)));