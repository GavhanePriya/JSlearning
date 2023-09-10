const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`-------------------------------------step 1 ------------------------`);
arrayRollNumbers.sort();
console.log(` This is the original array : ${arrayRollNumbers}`);
console.log(`-------------------------------------------------------`);
arrayRollNumbers.reverse(); 
console.log(`This is the Reverse array is : ${arrayRollNumbers}`); 
console.log(`-------------------------------------step 2 -------------------------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);
console.log(`-------------------------------------step 3 -------------------------`);
arrayRollNumbers.sort((n1 , n2)=>{
    return n1 > n2 ? 1 : -1; 
});
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);
console.log(`-------------------------------------step 4 ---------------------------`);
arrayRollNumbers.sort((n1,n2)=>{
return n1 > n2 ? 1 : -1;
});
const largestNumber = arrayRollNumbers[arrayRollNumbers.length-1];
console.log(` this is the largest number in array : ${largestNumber}`);
console.log(`------------------------------------step 5 ---------------------------`);
arrayRollNumbers.sort((n1,n2)=>{
    return n1 < n2 ? 1 : 0;
})
const smallestNumber = arrayRollNumbers[0];
console.log(`This is the smallest number in array is : ${smallestNumber}`);
console.log(`-------------------------------------step 6 -------------------------`);
const duplicate = [];
for (const element of arrayRollNumbers) {
    if (!duplicate.includes(element)) {
            duplicate.push(element)
    }
}
console.log(`This is the duplicate element in array is : ${duplicate}`);
console.log(`=====================================****===============================`);