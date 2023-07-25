console.log(`--------------------------------step 1---------------------------`);
var square = function(num){

   var result =  num * num;
   console.log(`Square of 5 is :- ${result}`);
}
square(5);
var square = function(num){
    var result = num * num;
    console.log(`Square of 6 is :- ${result}`);
}
square(6);
var square = function(num){
    var result = num * num;
    console.log(`Square of 25 is :- ${result}`);
}
square(25);
var square = function(num){
    var result = num * num;
    console.log(`Square of 100 is :- ${result}`);
}
square(100);
var square = function(num){
    var result = num * num;
    console.log(`Square of 67.89 is :- ${result}`);
}
square(67.89);
var square = function(num){
    var result = num * num;
    console.log(`Square of 59 is :- ${result}`);
}
square(59);
console.log(`---------------------------------------step2-------------------------------`);
console.log(typeof square);
console.log(`---------------------------------------step3-------------------------------`);
var area = function(){
 length = 499;
 width = 917;
 var result = length * width;
    console.log(`Area of Rectangle plot is :- ${result}`);
}
area();
console.log(`---------------------------------------step4--------------------------------`);
 function swapValues( n1,n2){
}
n1 = "Mahi";
n2 = "Raina";
console.log(`Before swaping a value==>`,'n1', n1,'n2',n2);
console.log(`After swaping a value==>`,'n1',n2,'n2',n1);
swapValues(n1,n2);
console.log(`-----------------------------------------****--------------------------------`);
value1 = 55;
value2 = 77;
console.log(`Before swaping a value==>`,'value1', value1,'value2',value2);
console.log(`After swaping a value==>`,'value1',value2,'value2',value1);

console.log(`-----------------------------------------step5------------------------------`);

    function strOperation (){
    var string = ("JS the most popular language of internet");
    console.log(`the string is:- ${string}`);
    console.log(`--------------------------------------****------------------------------`);
    var lengthString = string.length;
    console.log(`Total character in this string:- ${lengthString}`);
    console.log(`--------------------------------------****------------------------------`);
    var result = string.charAt(6);
    console.log(`Character at Index of 6 :-" " ${result}`);
    console.log(`---------------------------------------****-----------------------------`);
    var result = string.charAt(11);
    console.log(`Character at Index of 11 :- " "${result}`);
    console.log(`---------------------------------------****-----------------------------`);
    var Firstchar = string.charAt(0);
    console.log(`The First character in this string:- ${Firstchar}`);
    console.log(`---------------------------------------****-----------------------------`);
    var Lastchar = string.charAt(string.length-1);
    console.log(`The Last chatarcter in this string:- ${Lastchar}`);
    console.log(`--------------------------------------****-----------------------------`);
     var lastThirdchar = string.charAt(string.length-3);
     console.log(`The third last character in this string:- ${lastThirdchar}`);
     console.log(`--------------------------------------****-----------------------------`);
     var total = string.split(" ");
     var count  = total.length;
     console.log(`Total words of given string :- ${total}`);
     console.log(`Total No of Word is :- ${count}`);
     console.log(`---------------------------`);
     var final = count * count;
     console.log(`Total Square of total word:- ${final} `);
     console.log(`---------------------End of programme---------------------`);
}
strOperation();
