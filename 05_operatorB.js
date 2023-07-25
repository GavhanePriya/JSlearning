console.log(`---------------------Step1-----------------------`);
var greaterNumber = function(num1,num2){
var result = num1 > num2 ? num1 :num2;
 console.log(`The Greatest number of 10 And -10 :- ${result}`);
}
greaterNumber(10,-10);
var greaterNumber = function(num1,num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(`The Greatest number of 800 And 899: - ${result}`);
}
greaterNumber(800 , 899);
console.log(`--------------------step2--------------------------`);
var evenOrOddNumber = function(num){
    var result = num%2==0 ? "Even" : "Odd";
    console.log(`${num} given number is : - ${result}`);
}
evenOrOddNumber(29);
evenOrOddNumber(44);
evenOrOddNumber(0);
evenOrOddNumber(101);
console.log(`-----------------------step3--------------------------`);
var wordLength = function(string){
    var len = string.length;
    // console.log(`length=${len}`);
    var result = len%2==0 ?"Even" : "odd";
    console.log(`${string} =${result}`);
}
wordLength("Javascript");
wordLength("Developer");
wordLength("Google");
console.log(`-------------------------*****--------------------------`);

