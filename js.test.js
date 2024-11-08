let age, n;
age = prompt();
n = prompt();
alert(age + " " + n);
console.log(age, n);

if (age > 18){
    alert("Совершеннолетний")
}
else{ alert("Несовершеннолетний") }

let num = Math.floor(Math.random() * 9)+1
console.log(num);
let greaterthanfive = num >= 5;
if(prompt() != num){
    console.log("не угадал");
    if(greaterthanfive){
        console.log("Больше пяти");
    }
    else{console.log("Меньше пяти");}
}
else{console.log("Угадал");}


let password;
let setps = prompt();
if(setps != ""){
    password = setps;
}
setps = prompt();
if(setps != "" && setps == password){
    console.log("zaloginilsya");
}
else{console.log("Neugadal");}



let num1 = prompt();
let num2 = prompt();
num1 = parseInt(num1);
num2 = parseInt(num2);
let operator = prompt();

switch(operator){
    case '+': alert(num1+num2);
    case '-': alert(num1-num2);
    case '*': alert(num1*num2);
    case '/': alert(num1/num2);
}