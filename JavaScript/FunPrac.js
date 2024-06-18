// 1
// function repeatStr(x=[])
// {
//   x=prompt("Enter any string")
//     for(i=0; i< 5; i++)
//         {
//             document.writeln(x[i])
//             document.writeln(i)
//         }        
// }
// repeatStr()

// 2  write a function to convert a string ion title case

// function titlecase(x)
// {
//     x=prompt("Enter any strings")
//     x.CharAt(0)
//     document.write(x)
// }
// titlecase()

// 3
// function insertAt(x = [], index, insert) {
//     x = prompt("Enter the string")
//     index = prompt("Enter the index number")
//     for (i = 0; i < x.length; i++) {
//         document.writeln(i, "=")
//         document.writeln(x[i])

//         if (i == index) {
//             insert = prompt("Enter the string which you want to add")
//             document.writeln(x.concat(insert))
//             alert("insertion completed")
//         }
//     }
// }
// insertAt()

// 4
// function removeStr(x,y)
// {
//     x=prompt("Enter any string")
//     y=prompt("Enter the sub_string")
//     z=x.concat(y)
//     document.writeln(z)
//     a=x.replace(z)
//     document.write(a)
// }
// removeStr()

// 8  count the string words one by one
// function countStr(x=[])
// {
//     x=prompt("Enter the string")
//     for(i=0; i<x.length; i++)
//         {
//            document.write(x[i],"=")
//            document.write(" ",i)
//         }
// }
// countStr()

// 9 find longest string in the word
// function longStr(x)
// {
//     x=prompt("Enter the string")
//     y=x.split("")
//     console.log(y)
//     for(i=0; i<y.length; i++)
//         {
//             document.write(y[i])
//             if(i==" ")
//                 {
//                     alert("the longest str")
//                 }
//         }
// }
// longStr()

// 17   string into integer
// function int(x)
// {
//   x=Number(prompt("Enter any string"))
//   console.log(typeof(x))
// }
// int()

// 18  string into float
// function float(x)
// {
//   x=prompt("Enter any string")
//   y=parseFloat(x)
//   console.log(typeof(y))
// }
// float()

//  valid email or not 
//  function email(id,isValid,pattern)
//  {
//    id=prompt("Enter your mail id for verification")
//    pattern= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//    isValid=pattern.test(id)
//    document.write(isValid)
//  } 
// email()



// const a = prompt("Enter the string")
// function repeat(a) {
//  while(a.length<20) {
//  a+=" "+a;
// }
// document.write(a)
// }
// repeat(a)



// const sentence = prompt("Enter the sentence")
// const substring = prompt("Enter the substring")
// const index = Number(prompt('${sentence}' after how many words do you want to insert '${substring}'))
// function insert(sentence,sub,i) {
//  const arr = sentence.split(" ")
// let final_output="";
// if (i==0) {
//  final_output+=sub+" "
// arr.forEach(element => {
//  final_output+=element+" "
// });
// } else if(i==arr.length) {

// arr.forEach(element => {
//  final_output+=element+" "
// });
// final_output+=sub+" "
// }else{
// for (let index = 0; index <arr.length; index++) {
// if (index==i) {
//  final_output+=sub+" "+arr[index]
// } else {
//  final_output+=arr[index]+" ";
// } 
// }
// }
// document.write(final_output)
// }
// insert(sentence,substring,index)

// const sentence = prompt("Enter the sentence")
// const index = Number(prompt('${sentence}' which words do you want to remove substring))
// function remove(sentence,i) {
//  const arr = sentence.split(" ")
// let final_output="";
// for (let index = 0; index <arr.length; index++) {
// if (index!=i-1) {
//   final_output+=arr[index]+" ";
// } 

// }
// document.write(final_output)
// }
// remove(sentence,index)

// const sentence = prompt("Enter the sentence")
// function toCamelCase(sentence) {
//  const arr = sentence.split(" ")
// for (let index = 0; index <arr.length; index++) {
//  document.write(arr[index][0].toUpperCase())
// for (let index2 = 1; index2 < arr[index].length; index2++) {
//  document.write(arr[index][index2].toLowerCase());
// }
// document.writeln()
// }
// }
// toCamelCase(sentence)

// const sentence = prompt("Enter the sentence")
// function toSnakeCase(sentence) {
// for(let i =0;i<sentence.length;i++){
//   if (sentence[i]==' ') {
//    document.write("_")
//   } else {
//    document.write(sentence[i])
//   }
//  }
// }
// toSnakeCase(sentence);



// const sentence = prompt("Enter the sentence")
// function toKebabCase(sentence) {
// for(let i =0;i<sentence.length;i++){
//   if (sentence[i]==' ') {
//    document.write("-")
//   } else {
//    document.write(sentence[i])
//   }
//  }
// }
// toKebabCase(sentence);

// const sentence = prompt("Enter the sentence")
// function toCountWords(sentence) {
// let arr = sentence.split(" ")
// document.write("Total no of words : "+arr.length)
// }
// toCountWords(sentence);

// const sentence = prompt("Enter the sentence")
// function toLongestWord(sentence) {
// let arr = sentence.split(" ")
// let max =0;
// let i ;
// for (let index = 0; index < arr.length; index++) {
//  if(arr[index].length>max)
// max=arr[index].length
// i= index
// }
// document.write("Longest Word : "+arr[i])
// }
// toLongestWord(sentence);

// const sentence = prompt("Enter the sentence")
// function toShortestWord(sentence) {
// let arr = sentence.split(" ")
// let max =sentence.length;
// let i ;
// for (let index = 0; index < arr.length; index++) {
//  if(arr[index].length<max){
// max=arr[index].length
// i = index
// }}
// document.write("Shortest Word : "+arr[i])
// }
// toShortestWord(sentence);

// const sentence = prompt("Enter the sentence")
// function findDigits(sentence) {
// for (let index = 0; index < sentence.length; index++) {
//  if (sentence.charAt(index)==0||sentence.charAt(index)==1||sentence.charAt(index)==2||sentence.charAt(index)==3||sentence.charAt(index)==4||sentence.charAt(index)==5||sentence.charAt(index)==6||sentence.charAt(index)==7||sentence.charAt(index)==8||sentence.charAt(index)==9) {
//   document.writeln(sentence[index])
//  }
// }
// }
// findDigits(sentence);


// const sentence = prompt("Enter the email")
// function validEmail(sentence) {
// let attherate=false,dot=false
// for (let index = 0; index < sentence.length; index++) {
// if (sentence[index]=='@') {
//  attherate=true
// }
// if (sentence[index]=='.') {
//  dot=true
// }
// }
// if(attherate&&dot){
// document.write("Email is valid")
// }else{
// document.write("Email is not valid")
// }
// }
// validEmail(sentence);

// const url = prompt("Enter the url")
// function validURL(url) {
// let protocol=false,dot=false
// if (url[0]=='h'&&url[1]=='t'&&url[2]=='t'&&url[3]=='p'&&((url[4]==':'&&url[5]=='/'&&url[6]=='/')||(url[4]=='s'&&url[5]==':'&&url[6]=='/'&&url[7]=='/'))) {
//  protocol=true
// }
// for (let index = 7; index < url.length; index++) {

// if (url[index]=='.') {
//  dot=true
// }
// }
// if(protocol&&dot){
// document.write("Url is valid")
// }else{
// document.write("Url is not valid")
// }
// }
// validURL(url);

// const str = prompt("Enter the string")
// function onlyLetters(str) {
// let check =true
// for (let index = 0; index < str.length; index++) {
// let num = str.charCodeAt(index)
// if ((num>=65&&num<=90)||(num>=97&&num<=122)) {
// }else{
// check = false
// }
// }
// if (check) {
//  document.write("This string only have letter")
// } else {
//  document.write("String is contains element other than letters")

// }

// }
// onlyLetters(str);



// const str = prompt("Enter the string")
// function onlyDigits(str) {
// let check =true
// for (let index = 0; index < str.length; index++) {
// let num = str.charCodeAt(index)
// if ((num>=48&&num<=57)) {
// }else{
// check = false
// }
// }
// if (check) {
//  document.write("This string only have digits")
// } else {
//  document.write("String is contains element other than digits")

// }

// }
// onlyDigits(str);



// const str = prompt("Enter the string")
// function onlyAlphanum(str) {
// let check =true
// for (let index = 0; index < str.length; index++) {
// let num = str.charCodeAt(index)
// if ((num>=48&&num<=57)||(num>=65&&num<=90)||(num>=97&&num<=122)) {
// }else{
// check = false
// }
// }
// if (check) {
//  document.write("This string only have Alphanumeric values")
// } else {
//  document.write("String is contains element other than Alphanumeric values")

// }

// }
// onlyAlphanum(str);

// const inte = prompt("Enter the int")
// function convert(i) {
//  document.write(parseInt(i))
// }
// convert(inte)

// const flot = prompt("Enter the int")
// function convert(i) {
//  document.write(parseFloat(i))
// }
// convert(flot)

// const date = prompt("Enter the date in YYYY-MM-DD")
// function year(i) {
// for (let index = 0; index < 4; index++) {
//  document.write(i[index])
// }
// }
// year(date)



// function month(i) {
// for (let index = 5; index < 7; index++) {
//  document.write(i[index])
// }
// }
// month(date)

// function dates(i) {
// for (let index = 8; index < 10; index++) {
//  document.write(i[index])
// }
// }
// dates(date)


