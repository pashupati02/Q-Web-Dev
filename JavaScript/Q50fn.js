// 1. Write a function that returns the length of an array.

// function retLen(x=[]) 
// {
//     x = prompt("Enter your array")
//     console.log(x.split(''));
// }
// retLen()
// document.write("<br>")



// 2. Write a function that returns the first element of an array.
// function firstelement(x=[10,20,3,0,41])
// {
//     console.log(x[0])
// }
// firstelement()


// 3. Write a function that returns the last element of an array.
// function lastindexarr(x)
// {
//     x=prompt("enter array elemants")
//     y=x.split('')
//     console.log(y[y.length-1])
// }
// lastindexarr()


// 4. Write a function that returns the sum of all elements in an array.
// function sumofeloements(x=[12,2,5,3,6],y=0)
// {
//     for (i =0; i < x.length-1 ;i++) 
//     {
//         y=y+x[i]    
//     }
//     console.log(y)

// }
// sumofeloements()


// 5. Write a function that returns the average of an array of numbers.
// function avrofarr(x=[10,20,30,5],y=0)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y=y+x[i]
//         }
//         console.log(parseFloat(y/x.length))
// }
// avrofarr()


// 6. Write a function that returns the maximum value in an array.
// function maxelement(x=[1,20000,3,5,4,10,201],y=x[0])
// {
//     for(i=0; i<x.length; i++)
//         { 
//             if(y<x[i])
//                 {
//                    y =x[i]
//                 } 
//         }  
//         console.log(y)        
// }
// maxelement()


// 7. Write a function that returns the minimum value in an array.
// function minelement(x=[100000,20000,3,5,4,10,201],y=x[0])
// {
//     for(i=0; i<x.length; i++)
//         { 
//             if(y>x[i])
//                 {
//                    y =x[i]
//                 } 
//         }  
//         console.log(y)        
// }
// minelement()

// 8. Write a function that reverses an array.
// function reversearr(x=[1,2,3,4,5,6])
// {
//     console.log(x.reverse())
// }
// reversearr()


// 9. Write a function that concatenates two arrays.
// function addarray(x/*=[1,2,3,6,5,4]*/,y/*=[121,4,5,7,8]*/)
// {
//     x=prompt("Enter first array")
//     y=prompt("Enter second string")
    // z=x.split(" ")
//     v=y.split(" ")
//     console.log(x.concat(v))
// }
// addarray()


// 10. Write a function that checks if an array contains a specific element.
// function check_element(x=[10,20,30,50,40,60],y=10)
// {
//     for(i=0; i<x.length; i++)
//         {
//             if(y==x[i])
//             {
//                 console.log("Element is there at index",i)
//             }
//             else
//             {
//                 console.log("Element is not there")
//             }
//         }  
// }
// check_element()



// 11. Write a function that returns the index of an element in an array.
// function findindex(x=[10,20,30],y=30)
// {
//     for(i=0; i<x.length; i++)
//         {
//             console.log(x[i],i)
//            if(y==x[i])
//             {
//                 console.log(x[i])
//                 console.log("Element at index ",i)
//             }
//         }
// }
// findindex()



// 12. Write a function that removes the first element of an array.
// function removeelement(x=[10,20,30,40])
// {
//     console.log(x)
//     console.log(x.shift())
// }
// removeelement()



// 13. Write a function that removes the last element of an array.
// function removelastelement(x=[10,20,30,40])
// {
//     console.log(x)
//     console.log(x.pop())
// }
// removelastelement()



// 14. Write a function that adds an element to the beginning of an array.
// function addelementatstart(x=[10,20,30,40])
// {
//     console.log(x)
//     console.log(x.unshift(10000))
//     console.log(x)
// }
// addelementatstart()


// 15. Write a function that adds an element to the end of an array.
// function elementatend(x=[10,20,30,40])
// {
//     console.log(x)
//     console.log(x.push(5000))
//     console.log(x)
// }
// elementatend()



// 16. Write a function that removes an element front an array by index.front 
// function frontindex(x=[10,20,30])
// {
//     console.log(x.splice(0,1))  
// }
// frontindex()



// 17. Write a function that removes all occurrences of a specific element from an array.

// function repeatvalueremove(x=[10,10,20,20,5,100,5],y=[0])
// {
//     for(i=0; i<x.length; i++)
//         {
//            y[0]=x[i]
//            if(y[0]==x[i])
//             {
//             }
//         }
//         console.log(y)
// }
// repeatvalueremove()

// 18. Write a function that removes duplicates from an array.

// function removeduplicate(x=[10,100,20,5,6,3,2],y)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y +=x[i]
//             if(y==x[i])
//                 {
//                     console.log(delete y)
//                 }
//         }
//         console.log(y)
// }
// removeduplicate()


// 19. Write a function that returns a new array with the element alphabetical order.

// function fsort()
// {
//     const words = ["mango","banana","apple","ball" ,"cat","dog"];
//     const sortedWords = words.sort();
//     console.log(sortedWords);
// }
// fsort() 

// 20. Write a function that returns a new array with the elements in numerical order.

// function fsort() 
// {
//     const numb = [11,67,98,9,76,45,65];
//     const sortednum = numb.sort();
//     console.log(sortednum);
// }
// fsort()
// 21. Write a function that checks if all elements in an array are even.

// function evencheck(x=[1,2,3,4,5,6,7,8],y)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y=x[i]
//             if(y%2==0)
//                 {
//                     console.log("its even",y)
//                 }
//         }
// }
// evencheck()


// 22. Write a function that checks if all elements in an array are odd.
// function oddcheck(x=[1,2,3,4,5,6,7,8],y)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y=x[i]
//             if(y%2!=0)
//                 {
//                     console.log("its odd",y)
//                 }
//         }
// }
// oddcheck()


// 23. Write a function that returns an array of even numbers from an array. 
// function evencheck(x=[1,2,3,4,5,6,7,8],y)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y=x[i]
//             if(y%2==0)
//                 {
//                     console.log("its even",y)
//                 }
//         }
// }
// evencheck()

// 24. Write a function that returns an array of odd numbers from an array.
// function oddcheck(x=[1,2,3,4,5,6,7,8],y)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y=x[i]
//             if(y%2!=0)
//                 {
//                     console.log("its even",y)
//                 }
//         }
// }
// oddcheck()

// 25. Write a function that returns the largest number in an array.

// function largestelement(x=[100,15880,300,15,80,10,805],y=x[0])
// {
//     for(i=0; i<x.length; i++)
//         { 
//             if(y<x[i])
//                 {
//                    y =x[i]
//                 } 
//         }  
//         console.log(y)        
// }
// largestelement()

// 26. Write a function that returns the smallest number in an array.

// function smallestelement(x=[897,785,344,1145,4,780,500],y=x[0])
// {
//     for(i=0; i<x.length; i++)
//         { 
//             if(y>x[i])
//                 {
//                    y =x[i]
//                 } 
//         }  
//         console.log(y)        
// }
// smallestelement()

// 27. Write a function that returns the second largest number in an array.


// 28. Write a function that returns the second smallest 

// 31. Write a function that merges two arrays and removes duplicates.

// function mergarray(x=[10,203,20],y=[4,5,68,78])
// {
//     console.log(x.concat(y))
// }
// mergarray()

// 32. Write a function that finds the intersection of two arrays.

// function joinedarray(x=[10,20,30],y=[10,20,40,50,60],z)
// {
//     z=x.filter((element)=>y.includes(element))
//     console.log(z)
// }
// joinedarray()

// 33. Write a function that finds the union of two arrays.

// function unionarr(x=[10,20,30],y=[40,50,30],z)
// {
//     console.log(z=[...new Set([...x,...y])])
// }
// unionarr()

// 34. Write a function that finds the difference between two arrays.

// function difftwoarr(x=[10,20,30],y=[10,20,50,60])
// {
//     console.log(z=x.filter((element)=> !y.includes(element)))
// }
// difftwoarr()

// 35. Write a function that returns the first n elements of an array.
// function nelements(x=[10,20,30,40,50,60],n=2)
// {
//    z=x.slice(0,n)
//    console.log(z)
// }
// nelements()

// 36. Write a function that returns the last n elements of an array. 
// function nelastlements(x=[10,20,30,40,50,60],n=5)
// {
//    z=x.slice(-n)
//    console.log(z)
// }
// nelastlements()

// 37. Write a function that returns a new array with the elements doubled.
// function elementdouble(x=[10,20,30],y)
// {
//    y= x.map((x)=>x+x)
//    console.log(y)
// }
// elementdouble()

// 38. Write a function that returns a new array with the elements squared.
// function squareofarrelement(x=[10,20,30],z)
// {
//     z=x.map((x)=>x*x)
//     console.log(z)
// }
// squareofarrelement()

// 39. Write a function that finds the sum of the squares of the elements in an array.
// function arrsquare(x=[10,20,30],y=0)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y += x[i]*x[i]
//         }
//         console.log(y)
// }
// arrsquare()

// 40. Write a function that finds the product of all elements in an array.
// function productarr(x=[10,20,30],y=1)
// {
//     for(i=0; i<x.length; i++)
//         {
//             y *=x[i]
        
//         }
//         console.log(y)
// }
// productarr()

// 41. Write a function that rotates an array to the left by n positions. 

// 42. Write a function that rotates an array to the right by n positions.


// 43. Write a function that finds the median of an array of numbers.
// function medianofarr(x=[10,20,30,40,50])
// {
//         console.log(z=parseFloat((x.length)/2))
// }
// medianofarr()

// 44. Write a function that finds the modes of an array of numbers.

// 45. Write a function that groups the elements of an array based on a given criterion.

// 46. Write a function that returns an array of unique elements from an array of arrays.

// 47. Write a function that finds the common elements in multe arrays.
// function joinarray(x=[10,20,30],y=[10,20,40,50,60],z)
// {
//     z=x.filter((element)=>y.includes(element))
//     console.log(z)
// }
// joinarray()

// 48. Write a function that shuffles the elements of an array.
// function shufflearr(x=[10,20,30,40,50])
// {
//     for(i=x.length; i<0; i--)
//         {
//             y=Math.floor(Math.random()*(i+1))
//             console.log(y)
//             temp=x[i]
//             x[i]=x[y]
//             x[y]=temp
//             console.log(temp)

//         }
// }
// shufflearr()

// 49. Write a function that creates an array of a specified length, filled with a specified




