 console.log(`-------------------------------Assignment 1--------------------`);
 console.log(`-----------------------------Step1-----------------------------`);
 function oddeven(num){
    if (num%2==0) {
        console.log(`given number ${num} is even number`);
    } else {
        console.log(`given number ${num} is odd number`); 
    }
}
oddeven(45);
oddeven(70);
oddeven(67);
oddeven(98);
console.log(`------------------------------------Step2-----------------------`);
function voteEligibility(age){
    if (age>18) {
        console.log(`Person age is ${age} your eligible for voting `);
    } else {
        console.log(`Person age is ${age} your not eligible for voting `); 
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);
console.log(`---------------------------------------Step3-----------------------------`);
function count(){
    var string = "JavaScript-ES6";
    var result = string.length;
    if (string.length>10) {
        console.log(`javascript-ES6 String contain more than 10 Character Count is:${result}`);  
    } else {
        console.log(`javascript-ES6 String contain more than 10 Not Character Count is:${result}`);  
    }
}
count();
console.log(`-------------------------------------step4-----------------------------`);
function string(){
    var string = "javaScript Language";
    // var result = resultTrimStart.startWith(java);
    if (string.startsWith("java")) {
        console.log(`Yes, this string start with java.`);
    } else {
        console.log(`No, this string start with java.`);   
    }
}
string();
console.log(`-------------------------------------------******---------------------------`);

