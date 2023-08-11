

let employeeInform = `{
    "name": "Alexi Melon",
    "id": "E00245",
    "role":["DEV","DBA"],
    "age":23, 
    "doj":"11-12-2019",
    "married":false,
    "address":{
    "street":"32,Laham St.",
    "city":"Innsbruck",
    "country":"Austria"
    },
    "referred-by":"E0012"
}`;
console.log(`-----------------------------After json----------------------`);
console.log(`type of employeeInform : ${typeof employeeInform}`);
console.log(`---------------------------Before josn---------------------`);
const address = JSON.parse(employeeInform);
console.log(` address type of ==> ${typeof address}`);
console.log(address);
// convert to object....
 const employee={};

 console.log(`---------------------------step 1------------------`);
const arrayRole = address.role;
for (const role of arrayRole) {
    if (role=="DEV") {
        console.log(role);   
    }
}
console.log(`--------------------------step2---------------------`);
const employeeName = address.name.split(" ");
console.log(employeeName);
const  n = employeeName[1];
console.log(n);
console.log(`-----------------------strp3------------------------`);
const employeeDate = address.doj.split("-");
console.log(employeeDate);
const year = employeeDate[2];
console.log(year);
console.log(`-------------------------End---------------------`);
