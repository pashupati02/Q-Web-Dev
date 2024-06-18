// Array Destructuring.

let arr =[10,45,78,85,96,74,45,12,76,49,77];
let [a,b,c,d,...z]=[...arr]
console.log(z)
// all the elements store in another bank
// let [a,b,c,d,e,f,...v]=[...arr]

// ...arr it is Spread Operator to sprate array.
// ...v it is used to store remaning elements of an array.


// Destructuring Object

// let emp = {
//     empName: "Pashupati",
//     empId: 21,
//     Loc :"Gurugeam",
//     deptNo: 45,
//     Mgr:345345,
// };
// we have to use same key name while destructure the objects
// let {empName,empid,Mgr} ={...emp};
// console.log(empName);
// console.log(Mgr);

// we acn skip the elents because it ue keys to access the object.
// We cant use Rest Parameters inside of Object Destructuring.

// Q1 What is Destructuring and what is difference between spread operator and rest parameters.
// Q2 Wrire down the difference between Array and Object destructuring.
// Q3  

