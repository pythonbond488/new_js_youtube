let score = "44wer";

// console.log(typeof score); // string
// console.log(typeof (score)); // string


let valueInNumber = Number(score); // convert to the number datatype
// console.log(typeof valueInNumber); // number
// console.log( valueInNumber); // Not a Number 

let data = null;
// console.log(data); // null

let data1 = undefined;
// console.log(data1); // undefined



let data2 = "hello"

let changedata2 = Number(data2)
// console.log(changedata2); // Not a Number


let data3 = true;

let changedata3 = Number(data3)
// console.log(changedata3); // output 1 and when the value of data3 is false then value is 0

// "33" => 33
// "22edr" => NaN


let isLoggedin = 1;

let changelogesin = Boolean(isLoggedin)
// console.log(changelogesin); // true

// 1 => true
// 0 => false
//"hello" => true
// " " => false


let mynum = 98;
 
let changemynum = String(mynum)
// console.log(changemynum); //98
// console.log(typeof changemynum); // string

// Mostly browser give string values 



// ************************* Operations **********************

let value = 4

let negativevalue = -value
// console.log(negativevalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " prakhar"

let str3 = str1 + str2
// console.log(str3);
//console.log("1" + 2); // 12
//console.log(1 + "2"); // 12
//console.log("1" + "2"); // 12
//console.log("1" + 2 + 2); // 122
//console.log(1 + 2 + "2"); // 32
//console.log("1" + (2 + 2)); // 14

// console.log(2 + true); // 3
// console.log(2 + false); // 2
// console.log("hello" + true); // hellotrue
// console.log("hello" + false); // hellofalse 

// console.log(2 - true); // 1
// console.log(2 - false); // 2
// console.log("hello" - true); // NaN
// console.log("hello" - false); // NaN

let counter = 12;
counter++
// console.log(counter); // 13
counter--
// console.log(counter); // 12 
counter += 5
// console.log(counter); // 17
counter -= 5
// console.log(counter); // 12
counter *= 5 