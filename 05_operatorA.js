console.log(`-----------------------step1-----------------`);
function squareOfWordLength(string){
    var result = string.length;
    console.log(`Given String is : ${string}`);
    console.log(`string Length is : ${result}`);
    var square = result * result;
    console.log(`Square of this string : - ${square}`);
}
squareOfWordLength("JavaScript");
console.log(`-----------****------------`);
squareOfWordLength("Google Chrome");
console.log(`------------****------------`);
squareOfWordLength("Developer Smart");
console.log(`------------****-------------`);
console.log(`------------------------step2-----------------`);
var word = function(word){
var string = `I am Angular Developer`;
var length = string.length;
var word = string.split(" ");
var count = word.length;
console.log(`Total length of this string: - ${length}`);
console.log(`Total word of this string :-${count} `);
 var final = length / count;
 console.log(`Total number of word are divided by total word this string :- ${final}`);
 console.log(`---------------****-----------------`);
 var final = length * count;
 console.log(`Total number of word are multiplication total word this string:-${final}`);
}
word();
console.log(`-----------------------------****-------------------------------`);

