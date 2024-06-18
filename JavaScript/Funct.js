// let a;
// let b;
// let c;

// function fun(a,b,c)
// {
//     //document.write(this);
//     // Inside function this keyword always defaultly binds to Windows Object.

//     this.a =a;
//     this.b =b;
//     this.c =c;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// fun(1,2,3);

// // let m =(p)=> p<10
// // console.log(m(1));

// let m =(p,k)=>( p<10,
//                 k<10)

// console.log(m(1,3));


// let l = 0 || 10 // from db we cant access 0 or null
// console.log(l);

//  || nullish operator.

// Higher order Function and callback function

function square()
{
    let a =7;
    return a;
}
function area(b) 
{
    let c = b();
    return c*c;
}
area(square)
console.log(area(square))
