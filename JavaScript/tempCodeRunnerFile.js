const n = parseInt(window.prompt("Enter number for factorial"));
x = 1;
for (i = n; i >= 1; i--) {
    x = x * i;
    console.log(x);
}