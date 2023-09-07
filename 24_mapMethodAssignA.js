console.log(`------------------------------Assgnment 1----------------------`);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`----------------------------step1-----------------------------`);
const addNumbers = arrayNumbers.map((currentvalue)=>{
    return currentvalue + 10

})
console.log(`Add 10 into each element are : ${addNumbers}`);
console.log(`-----------------------------------step2--------------------------`);
const cubeNumbers = arrayNumbers.map((currentvalue)=>{
    return currentvalue * currentvalue * currentvalue
})
console.log(`The cube of each element are : ${cubeNumbers} `);
console.log(`----------------------------------step 3-----------------------------`);
const indexNumber = arrayNumbers.map((currentvalue,index)=>{
    return currentvalue + index 
})
console.log(`Add a index value are each elemnet is ${indexNumber}`);
console.log(`=============================*****==============================`);