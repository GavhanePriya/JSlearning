console.log(`------------------------------Step1--------------------------`);
function maleMarraigeEligiblity( gender , age , boyName){

var result = (gender >= "male" && age >=21)? console.log(`Hey ${boyName} you are age ${age} is so you are eligible for marriage`) :console.log(`Hey ${boyName} your age ${age} is so your not eligible for Marriage`);
}
maleMarraigeEligiblity("male",25,"Billgates");
console.log(`--------------------****-------------------`);
maleMarraigeEligiblity("Male",17,"Stew Jobs");
console.log(`--------------------------------Step2--------------------------`);

 function femaleMarriageEligibility(gender , age, girlName){
    var result = (gender >= "Female" && age>= 18 ) ?console.log(`Hey ${girlName} your age is ${age} is so your eligible for marriage`) : console.log(`Hey ${girlName} your age ${age} is so your not eligible for marriage`);
 }
  femaleMarriageEligibility("Female" , 16 , "Jenifer")
  console.log(`--------------------****--------------------`);
  femaleMarriageEligibility("Female" , 27 , "Malinda Gates");
  console.log(`------------------------------------------------------------------------`);




