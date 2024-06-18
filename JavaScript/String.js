// let str = "JAVASCRIPT IS A CLIENT SIDE SCRIPTING LANGUAGE JAVASCRIPT"; 
// document.write(str.length);// space is also countable
// document.write("<br>")


// document.write(str.slice(-10,-1));
// it used to fetch some specific part of even string.
//in slice method we pass two argument
// 1 starting index.
// 2 Ending index.
// slice method exclude ending index
// slice method will not affact to existing string
// we can used negative index
// negative index start from -1  
// document.write("<br>")

// document.write(str.substring(0,10))
// contain two arguments
// 1 starting index
// 2 ending index
// not accept negative index


// document.write("<br>")
// document.write(str.substr(0,10))
// 1  string starting index
// 2 length of the string

// document.write("<br>")
// document.write(str.replace("JAVASCRIPT","ECMASCRIPT"))
// document.write("<br>")
// document.write(str)
// this method cant replace existing string
// if there more than more than one then replace method replace only first occurance
// replace all replace all accurances 
// all the primitive dt are immutable and non-primitive dt are mutable
// document.write("<br>")
// document.write(str.replaceAll("JAVASCRIPT","ECMASCRIPT"))

// this method affact all string
// document.write("<br>")
// document.write(str.toUpperCase())
// document.write("<br>")
// document.write(str.toLowerCase())


// document.write("<br>")
// let str1="Pashupati ";
// let str2="Baitha .";
// document.write(str1.concat(str2))
// it will not affact existing string

// document.write("<br>")
// it will remove the space at coners not between string
// document.write(str1.trim(str1))


// document.write("<br>")
// let str3= "9123414725";
// for padding we must slice first then use padEnd/Start
// document.write(str3.slice(0,4).padEnd(10,"*"))
// document.write("<br>")
// document.write(str3.slice(-6).padStart(10,"*"))
// it goes from ==> 


// document.write("<br>")
// document.write(str.charAt(1))
// it will accept index value and it will return charactor or string


// document.write("<br>")
// document.write(str.charCodeAt(1));
// it will return ASCII value
// it will accept charactor
// it will accept index value only


// document.write("<br>")
// document.write(str.split(""))
// document.write("<br>")
// document.write(str.split(" "))
// document.write(str.split("T")) // from there it Split 

// it used to convert string into array
// write a program to  reverse a string.

let a = "Pashupati"
let arr = a.split("").reverse().join("")
document.write(arr)