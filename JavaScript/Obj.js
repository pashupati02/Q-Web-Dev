let emp ={
    ename : "Pashupati",
    empid: 20075,
    salary: 400000,
    LOC: "Gurugram",
    deptno: 10,
    Mgr:8967,
    // work()
    // {
    //     console.log("working");
    // },
};
// console.log(Object.keys(emp))
// Object.keys(emp).forEach((ele,i)=>
//     {
//         console.log(emp[ele]);
//     })
// values
// console.log(Object.values(emp))

// Mege two objects using assign

let emp1={
    ename : "Dhiru",
    empid: 200754,
    salary: 900000,
    LOC: "Haryana",
    deptno: 10,
    Mgr:8967,
    // work()
    // {
    //     console.log("working");
    // },
};
// syntax it take two argument 
// 1 targert
// 2 source objecr : pass n numbers 
// console.log(Object.assign({},emp,emp1));
// console.log(emp)
// the target object affacting if you dont want to affact the original one use {}


//Entries method is used to convert object into Array => sub array , key value pair
console.log(Object.entries(emp))
// to conveert array into object by using from entries
//fromEntries
console.log(Object.fromEntries(Object.entries(emp)));
// it cant affact original object


//jSON js obj notation
// to convert js obj into JSON use 
console.log(JSON.stringify(emp1));

// to convert JSON to object
console.log(JSON.parse(emp1));