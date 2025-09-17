console.log("datatype.js loaded");

"use strict"; // treat all JS code as newer version

//alert("hello world"); // we are nodejs not the browser

//code ko simple or readable rakhne ki kosis karo bhot jyada...

let name = "harry"; //string literal
let age = 20; //number literal
let isApproved = false; //boolean literal
let firstName; //undefined literal
let selectedColor = null; //null literal

//number type {range: -2^53 to 2^53}
//bigint type {range: greater than 2^53 to less than -2^53}
//string type = "harry" , 'harry' , `harry`
//boolean type = true , false
//null type = stand alone value
//undefined type = at this time no value assigned in it
//symbol type = unique value


//object type = key value pair

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isApproved); //boolean
console.log(typeof firstName); //undefined
console.log(typeof selectedColor); //object

