array_numbers = [20,11,40,25,3,49,9,90,60,2,19];
console.log(`-------------------------------------step1-------------------------------`);
let sum=0;
for (const element of array_numbers) {
    sum=sum+element
    
}
console.log(`The sum of total array : ${sum}`);
console.log(`------------------------------------------step 2--------------------------`);
const multiple = array_numbers.filter((curentvalue)=>{
    return curentvalue%2==0;

})
console.log(` The total number of array is multiple of 5 is : ${multiple}`);

const totalSum = multiple.reduce( (curentvalue, element) => {
    return curentvalue + element;
} );
console.log(` The total sum of multilpe of 5 array is : ${totalSum}`);
console.log(`------------------------------------*****-------------------------------`);