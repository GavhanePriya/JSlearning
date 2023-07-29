var voteEligibe = function(age){
var num=+age;
if (isNaN(num) || age>130) {
console.log(`${age} is invalid data.`);
} else if (age>=18){
    console.log(`your age is ${age} Eligible for vote.`);  
} else {
    console.log(`your age is ${age} Not Eligible for vote.`);
}
}
voteEligibe(45);
voteEligibe(17);
voteEligibe(8);
voteEligibe(20);
voteEligibe(-10);
voteEligibe(200);
voteEligibe(0);
voteEligibe(undefined);
voteEligibe(null);