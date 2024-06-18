//1. Write a Function that returns the length of an array

// function length(x=[10,20,30,40,50,12,23,4,54]){
//     console.log(x.length)
//     }
// length();


//2. Write a Function that returns the first element of an array

// function firstele(x=[10,20,30,40,50,60]){
// console.log(x[0])
// }
// firstele();

// 3. Write a Function that returns the last element of an array
// function lastele(x=[10,20,30,40,50,60]){
//     console.log(x[x.length-1])
// }
// lastele();

// 4. Write a Function that returns the sum of all elements in an array

// function sum(x=[10,20,30,40,50,60]){
//     let a=0;
//     for(let i=0;i<x.length;i++){
//         a=a+x[i];
//     }
//     console.log(a)
// }
// sum();


// 5. Write a Function that returns the average of an array of numbers

// function averageofno(x=[10,20,30,40,50,60]){
//         let a=0;
//         let b=0;
//         for(let i=0;i<x.length;i++){
//             a=a+x[i];
//             b=a/x.length;
//         }
//         console.log(b)
//     }
//     averageofno();
    
// 6. Write a function that returns the maximum value in an array
// function maximumval(x=[10,20,30,40,50,60],y=x[0]){
//     for(let i=0;i<=x.length;i++){
//         if(y<x[i])
//             {
//                 y=x[i]
//             }
//     }
//     console.log(y)
// }
// maximumval();



// 7. Write a function that returns the minimum value in an array

// function minimumval(x=[10,20,30,40,50,60],y=x[0]){
//     for(let i=0;i<=x.length;i++){
//         if(y>x[i])
//             {
//                 y=x[i]
//             }
//     }
//     console.log(y)
// }
// minimumval();

// 8. Write a function that reverse an array

// function reverse(x=[10,20,30,40,50,60]){
//     console.log(x.reverse())
// }
// reverse();

// 9. Write a function that concatenates two Array
// function con(x=[10,20,30,40,50,60],y=[4,3,5,6]){
//     console.log(x.concat(y))
// }
// con();

// 10. Write a function that checks if an array contains a specific Element
// function checke(x=[10,20,40,50,60]){
// console.log(x.includes(40))
// }
// checke();

// 11. Write a function that returns the index of an Element in an Array
// function ind(x=[10,20,40,50,60]){
// console.log(x.indexOf(40))
// }
// ind();

// 12. Write a function that removes the first Element of an Array
// function remf(x=[10,20,40,50,60]){
//     x.shift()
//     console.log(x)
//     }
//     remf();    


// 13. Write a function that removes the last Element of an Array
// function reml(x=[10,20,40,50,60]){
//         x.pop()
//         console.log(x)
//         }
//         reml();   

// 14. Write a function that adds an element to the beginning of an array
// function insf(x=[10,20,40,50,60]){
//         x.unshift(100)
//         console.log(x)
//         }
//         insf();

// 15. Write a function that adds an element to the end of an array
// function insl(x=[10,20,40,50,60]){
//         x.push(200)
//         console.log(x)
//         }
//         insl();   


// 16. Write a function that removes an Element from an Array by index
// function remo(x=[10,20,40,50,60]){
//     delete(x[2])
//     console.log(x)
// }
// remo()


// 17. Write a function that removes all occurrences of a specific element from an array
// function remall(x=[10,20,40,50,60,20,40,20,50,20]){
//     for(let i=0;i<x.length;i++){
//         if(x[i]==20){

//             delete(x[i])}
//         }

//     console.log(x)
// }
// remall()


// 18. Write a function that removes duplicates from an array

// function remdup(x=[10,20,40,50,60,60,10,20,40,20,60,50,20]){
//     for(let i=0;i<x.length;i++){
//             for(let j=0;j<=i-1;j++){
//                 if(x[i]==x[j]){
//                     delete(x[i])}
//                     }
//             }
//         console.log(x)
//     }
//     remdup()

// 19. Write a function that returns a new array with the elements in alphabetical order
// function alpha(x=['s','a','u','r','a','b','h']){
//     for(let i=0;i<x.length;i++){
//             let temp=0;
//             for(let j=0;j<=i+1;j++){
//             if(x[i]<x[j]){
//                 temp= x[i];
//                 x[i]=x[j];
//                 x[j]=temp;
//             }
//         }
//         }
//         console.log(x)
// }
// alpha();

// 20. Write a function that returns a new array with the elements in numeric order
// function numOrder(x=[40,10,30,20,60]){
// for(let i=0;i<x.length;i++){
//     let temp=0;
//     for(let j=0;j<=i+1;j++){
//     if(x[i]<x[j]){
//         temp= x[i];
//         x[i]=x[j];
//         x[j]=temp;
//     }
// }
// }
// console.log(x)
// }
// numOrder()
// 21. Write a function that checks if all elements in an array are even
// function allEven(x=[10,20,40,50,60]){
//     let count=0;
// for(let i=0;i<x.length;i++){

//     if(x[i]%2==0)
//         count++;
// }
//     if(x.length==count)
//         console.log("All Are Even")
//     else
//     console.log("Not Even")
// }
// allEven();
// 22. Write a function that checks if all elements in an array are odd
// function allOdd(x=[11,21,43,55,67]){
//     let count=0;
// for(let i=0;i<x.length;i++){

//     if(x[i]%2!=0)
//         count++;
// }
//     if(x.length==count)
//         console.log("All Are Odd")
//     else
//     console.log("Not Odd")
// }
// allOdd();

// 23. Write a function that returns an array of even numbers from an array
// function even(x=[11,20,43,50,65,66]){
//         let count=0;
//     for(let i=0;i<x.length;i++){
    
//         if(x[i]%2==0)
//             console.log(x[i])
//     }
// }
//     even();
// 24. Write a function that returns an array of odd numbers from an array
// function odd(x=[11,20,43,50,65,66]){
//     let count=0;
// for(let i=0;i<x.length;i++){

//     if(x[i]%2!=0)
//         console.log(x[i])
// }
// }
// odd();
// 25. Write a function that returns the largest number in an array
// function largest(x=[10,20,30,40,50,60],y=x[0]){
//         for(let i=0;i<=x.length;i++){
//             if(y<x[i])
//                 {
//                     y=x[i]
//                 }
//         }
//         console.log(y)
//     }
//     largest();
    
// 26. Write a function that returns the smallest number in an array
// function smallest(x=[10,20,30,40,50,60],y=x[0]){
//     for(let i=0;i<=x.length;i++){
//         if(y>x[i])
//             {
//                 y=x[i]
//             }
//     }
//     console.log(y)
// }
// smallest();
// 27. Write a function that returns the second largest number in an array
// function secLargest(x=[40,10,30,20,60]){
//     let n=x;
//     for(let i=0;i<x.length;i++){
//         let temp=0;
//         for(let j=0;j<=i+1;j++){
//         if(x[i]<x[j]){
//             temp= x[i];
//             x[i]=x[j];
//             x[j]=temp;
//         }
//         }
//         }
//     console.log(x.at(x.length-2))
//     }
//     secLargest()
// 28. Write a function that returns the second smallest number in an array
// function secSmallest(x=[40,10,30,20,60]){
//     let n=x;
//     for(let i=0;i<x.length;i++){
//         let temp=0;
//         for(let j=0;j<=i+1;j++){
//         if(x[i]<x[j]){
//             temp= x[i];
//             x[i]=x[j];
//             x[j]=temp;
//         }
//         }
//         }
//     console.log(x[1])
//     }
//     secSmallest()
// 29. Write a function that flattens a nested array
// function flat(x=[10,20,30,[40,50]]){
//     console.log(x.flat())
// }
// flat()
// 30. Write a function that chunks an array into smaller arrays of a specified size
// function chunk(x=[10,20,30,40,50,54]){
//     console.log(x.slice(1,4))
// }
// chunk()

// 31. Write a function that merges two array and remove duplicates
// function merg(x=[10,20,30],y=[20,12,22,30,10,43]){
//     let z=x.concat(y);
//     for(let i=0;i<=z.length;i++){
//       for(let j=0;j<=i-1;j++){
//         if(z[i]==z[j]){
//              delete(z[i])}
//                             }
//                     }
//                 console.log(z)
// }
// merg()
// 32. Write a function that finds the intersection of two arrays.
// function inter(x=[10,20,30],y=[10,15,20,22,25,30,43]){
//     let z=x.concat(y);
//     for(let i=0;i<=z.length;i++){
//       for(let j=0;j<=i-1;j++){
//         if(z[i]==z[j]){
//              console.log(z[i])
//             }
//                             }
//                     }
// }
// inter()

// 33. Write a function that finds the union of two arrays
// function uni(x=[10,20,30],y=[10,15,20,22,25,30,43]){
//     let z=x.concat(y);
//     for(let i=0;i<=z.length;i++){
//       for(let j=0;j<=i-1;j++){
//         if(z[i]==z[j]){
//              delete(z[i])
//             }
//  }
//                     }
//                 console.log(z)
// }
// uni()
// 34. Write a function that finds the difference between two arrays
// let x= [10,20,30,40],y=[30,40,50,60]
// let diff= x.filter((e,i,a)=>!y.includes(e))
// console.log(diff)
// 35. Write a function that returns the first n elements of an array
// function nf(x=[10,20,30,40]){
//     console.log(x[0]);
// }
// nf()
// 36. Write a function that returns the last n elements of an array
// function nl(x=[10,20,30,40]){
//     console.log(x[x.length-1]);
// }
// nl()
// 37. Write a function that returns a new array with the element doubled
// x=[10,20,30,40]
// let doub =x.map((e,i,a)=>e*2)
// console.log(doub)

// 38. Write a function that returns a new array with the element squared
// x=[2,3,4,5]
// let square =x.map((e,i,a)=>e*e)
// console.log(square)
// 39. Write a function that finds the sum of the squares of the elements in an array
// function sum(x=[1,2,3,4,5]){
//     let square =x.map((e,i,a)=>e*e)
//     let s=0;
//     for(let i=0;i<square.length;i++){
//         s=s+square[i];
//     }
//     console.log(s)
// }
// sum()
// 40. Write a function that finds the product of all elements in an array
// function pro(x=[1,2,3,4,5]){
//     let p=1;
//     for(let i=0;i<x.length;i++){
//         p=p*x[i];
//     }
//     console.log(p)
// }
// pro()
// 41. Write a function that rotates an array to the left by n position
// function rotateR(x=[10,20,30,40])
// {
//     let n= 2;
//     for(let j=0;j<n;j++){
//         let a=x[0];
//         for(let i=0; i<x.length-1;i++){
//             x[i]=x[i+1];
//         }
//         x[x.length-1]=a;
//     }
//     console.log(x)

// }
// rotateR()
// 42. Write a function that rotates an array to the right by n position
// function rotateL(x=[10,20,30,40])
// {
//     let n= 1;
//     for(let j=n;j>0;j--){
//         let a=x[x.length-1];
//         for(let i=x.length-1; i>0;i--){
//             x[i]=x[i-1];
//         }
//         x[0]=a;
//     }
//     console.log(x)

// }
// rotateL()
// 43. Write a function that finds the median of an array of numbers
// function mid(x=[10,20,30,40,50]){
//     console.log(x.at(x.length/2))
// }
// mid()
// 44. Write a function that finds the mode(s) of an array of numbers
// function mode(x=[10,4,5,5,5,2,3,4,4,4,4,4,4,5,5,55,55,5,5,55,55]){
//     let c;
//     let s=0;
//     for(let i=0;i<x.length-1;i++){
//         let temp = 0;
//         for(let j=1;j<x.length;j++){
//             if(x[i]==x[j]){
//                 temp++;
//                 }
//                 }
//                 if(s<temp){
//                     c=x[i]
//                     s=temp;
//                     }
                    
//                     }
//     console.log(c+" is repeating "+ s +" times");
// }
// mode()
// 45. Write a function that groups the elements of an array based on given criteria
// x=[20,30,50,10,12,40,50]
// let square =x.filter((e,i,a)=>e>10)
// console.log(square)
// 46. Write a function that returns an array of unique elements from an array of arrays
// function unique(x=[10,20,30,30,40,50,60]){
//         for(let i=0;i<=x.length;i++){
//           for(let j=0;j<=i-1;j++){
//             if(x[i]==x[j]){
//                  delete(x[i])
//                 }
//              }
//       }
//         console.log(x)
// }
// unique()
// 47. Write a function that finds the common elements in multiple arrays
// function common(x=[10,20,30],y=[10,15,20,22,25,30,43]){
//         let z=x.concat(y);
//         for(let i=0;i<=z.length;i++){
//           for(let j=0;j<=i-1;j++){
//             if(z[i]==z[j]){
//                  console.log(z[i])
//                 }
//                                 }
//                         }
//     }
//     common()

// 48. Write a function that shuffles the elements of an array
// function shuffle(x=[10,20,30,40,50]){
//     for(let i=0;i<x.length-1;i++){
//         for(let j=1;j<x.length;j++){
//         let temp=x[i]
//         x[i] = x[j]
//         x[j] = temp
//     }
// }
//     console.log(x)
// }
// shuffle()

// 49. Write a function that creates an array of a specified length,filled with a specified value

// function specifi(x=[10,20,30,40,50]){
// x.splice(2,5,1,2,3,4)
// console.log(x)
// }
// specifi()

// 50. Write a function that splits an array into two arrays: one with truthy values and one falsy values.
// function truFalse( x=[false,0,null,'',NaN,undefined],y=[10,0,'saurabh',NaN,22,'',32, ,true,false,45]){
// let z=y.filter((e,i,a)=>!x.includes(e))
// let z1=y.filter((e,i,a)=>x.includes(e))
//      console.log(z)
//      console.log(z1)
// }
// truFalse()
