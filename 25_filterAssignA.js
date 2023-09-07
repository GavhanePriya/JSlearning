console.log(`----------------------------Assignmnet 3----------------------`);
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`-------------------------step1----------------------`);
const newArray = arrayNumbers.filter((currentvalue)=>{
    return currentvalue>50;
})
console.log(`This is the number are greater than 50 : ${newArray}`);
console.log(`----------------------step 2-------------------------`);
const evenNumber = arrayNumbers.filter((currentvalue)=>{
    return currentvalue%2==0
})
console.log(`The even numbers array in are : ${evenNumber}`);
console.log(`---------------------------step 3 -------------------`);
const oddNumber = arrayNumbers.filter((currentvalue)=>{
    return currentvalue%2==1
})
console.log(`The even numbers are in array : ${oddNumber} `);
console.log(`-----------------------------step 4------------------`);
const multipleNumbers = arrayNumbers.filter((currentvalue)=>{
    return currentvalue%5==0;
})
console.log(`The numers are multiple are 5 : ${multipleNumbers}`);
console.log(`----------------------------step 5---------------------`);
const greater = arrayNumbers.filter((currentvalue)=>{
    return currentvalue>20 && currentvalue<50;
})
console.log(`This number are greater than 20 and less than 50 : ${greater}`);
console.log(`--------------------------------*****---------------------------`);

