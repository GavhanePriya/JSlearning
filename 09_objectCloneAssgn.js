console.log(`-------------------------Step 1-----------------------`);
const  arrayNums=[20,3,4,56,90,400,49];
console.log(`Orignal Array : ${arrayNums}`);
arrayNums.push(55,66);
console.log(`After push array  ${arrayNums}`);
console.log(`--------------------------Step 2-------------------------`);
let cloneArray =[...arrayNums];
cloneArray.push(10,25);
console.log(`original array:${arrayNums}`);
console.log(`clone array:${cloneArray}`);
console.log(`---------------------------step 3 -----------------------`);
const arrayEven=[2,30,14,8];
console.log(`Second array:${arrayEven}`);
const margeArray = [...arrayEven, ...arrayNums];
console.log(`After Marege Array:${margeArray}`);
console.log(`----------------------------step4------------------------`);
const employee_info={
    emp_id:27,
    emp_name:"Johan Doe",
    salary:{
        july_maonth:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Knachan Plolki,431202",
        },
        city:"Mumbai",
        state:"MH",
        country:"India",
    },
    mobiles:["+91 8600 3456 68","1800- 4567 32","+91- 9096 5678 77"]
}
console.log(`-------------------------------step5---------------------------`);
 console.log(`Display the Address :${employee_info.address},${employee_info.address.locality}`);
console.log(`Dsplay the mobiles no:${employee_info.mobiles}`);
console.log(`-------------------------------step6----------------------`);


