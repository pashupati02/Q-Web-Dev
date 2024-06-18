// Q1
//const a = prompt("Enter your name")
// document.write(a.length)

// Q2
// const b = prompt("Enetr First Name")
// const c = prompt("Enter Second Name")
// document.write(b.concat(c))

// Q3
// let x=prompt("Enter the string")
// y=x.toUpperCase()
// document.write(y)


// Q4
// let x=prompt("Enter the string")
// y=x.toLowerCase()
// document.write(y)

// Q5 Take input from user and display five char from sentence
// let x1 = prompt("Enter your string")
// document.write(x1.slice(0,5).padEnd(10,"*"))
// document.write("<br>")


// Q6 Ask user for word and number display the char at specified position
// let x2 = prompt("Enter your string")
// let x3 = Number(prompt("Enter your number for specific number"))
// document.write(x2.charAt(x3))
// document.write("<br>")


// Q7
// let x=prompt("Enter the string")
// str2="..."
// document.write(x.concat(str2))

// Q8
// let x=prompt("Enter any name")
// document.write(x.replace("i",'I'))

// Q9 
// let x=prompt("Enter any sentence")
// let y=prompt("Enter any word")
// let a = x.split(" ")
// let count = 0
// for(i=0;i<a.length;i++){
//     if(a[i] == y){
        
//         count++
//     }
// }

// document.write(count)

// Q10
// const m =  prompt("Enter the List of items")
// document.write(m.split(" "))

// Q11
// const n = prompt("enter the string")
// document.write(n.trim())

// Q12
// let x=prompt("Enter any string")
// document.write(x.trim())


// Q13
// const t = prompt("enter the sytring")
// document.write(t.replace("hey","hello"))


// Q14 function first(){
//     const a = prompt("enter a string")
//     const b = prompt("enter a string")
//     if(a==b){
//         document.write("string is equal")
//     }
//     else{
//         document.write("not equal")
//     }
// }
// first()


// Q15 
// let sen = prompt("Enter your Sentense")
// let wor = prompt("Enter your word where present")
// document.write(sen.includes(wor))

//Q16
// let y = prompt("Enter your sentense")
// let a =0;
// for(i =0; i<y.length;i++)
//     {
//         let char = y[i].toLowerCase()
//         if (char==='a' ||  char==='e' || char==='i' ||char==='o' ||char==='u')
//             {
//                 a++;
//             }

//     }
//     document.write(a);




// Q17
// const a = prompt("enter name")
// const b = Number(prompt("enter Age"))
// document.write(`Hello ${a},It is nice meeting you,you are very kind and your age is${b}`)

// Funprac javascript  Question

// const yr = prompt("Enter the year")
// const dt = prompt("Enter the date")
// const mm = prompt("Enter the month")
// function format(yr,dt,mm) {
// document.write(yr+"-"+mm+"-"+dt)
// }
// format(yr,dt,mm)




// const a = prompt("Enter the string")
// function title_case(a) {
// const b = a.split(" ")
// for (let index = 0; index < b.length; index++) {
// const  d = b[index]
// if( d=="a" || d=="in"||d=="of"||d=="the"||d=="at"||d=="on"||d=="is"){
// document.writeln(d)
// }else{
// document.write(d[0].toUpperCase())
// for (let index = 1; index < d.length; index++) {
//  document.write(d[index]);
// }
// document.writeln()
// }
// }
// }
// title_case(a)





