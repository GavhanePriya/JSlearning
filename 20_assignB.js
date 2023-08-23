console.log(`--------------------------------Assignment 2------------------------`);
class employee{
    constructor(emp_id , emp_name , emp_dept , emp_salary , emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new employee(22 , "Anil", "IT" , 50000 , "TCS");
const emp_radha = new employee(33 , "Radha" , "HR" , 74000 , "Wipro");
const emp_rishi = new employee(55 , "Rishi" , "Finance" , 47000 , "TCS");
const emp_sonali = new employee(66 , "Sonali" , "Finance" , 45000 , "Infy");
const emp_monali = new employee(77 , "Monika" , "IT" , 40000 , "Wipro");
const emp_viny = new employee(88 , "Vinayak" ,"IT" , 75000 , "TCS");
const emp_mahi = new employee(99 , "Mahesh" , "HR" ,85000 , "Infy");

const arrayEmpolyess = [emp_anil  , emp_radha , emp_rishi , emp_sonali , emp_monali , emp_viny , emp_mahi];
console.log(`------------------------step 1--------------------`);
for (const employee of arrayEmpolyess) {
    if (employee.emp_company=="TCS") {
        console.log(`Employee name = ${employee.emp_name} , Employee Company name = ${employee.emp_company}`);
    }
}
console.log(`---------------------------step 2 ----------------`);
for (const employee of arrayEmpolyess) {
    if (employee.emp_dept=="Finance") {
        console.log(`Empolyee Name = ${employee.emp_name} , Employee Department Name = ${employee.emp_dept}`);
    }
    
}
console.log(`-----------------------------step3-----------------`);
for (const employee of arrayEmpolyess) {
    if (employee.emp_name.startsWith("R")) {
        console.log(` The employee name of start R is: ${employee.emp_name}`);
        
    }
    
}    
console.log(`------------------------------step4----------------------`);
for (const employee of arrayEmpolyess) {
    if (employee.emp_salary >75000) {
        console.log(`Employee name : ${employee.emp_name} , Employee Company Name:${employee.emp_company} , employee Salary:${employee.emp_salary}`);
    }
}
console.log(`--------------------------------step5------------------`);
for (const employee of arrayEmpolyess) {
    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        console.log(`${employee.emp_id}, ${employee.emp_name} , ${employee.emp_dept} , ${employee.emp_salary},${employee.emp_company}`);

    }
}
console.log(`-----------------------------step6----------------------`);
for (const employee of arrayEmpolyess) {
    if (employee.emp_company=="Infy") {
        console.log(`${employee.emp_id}, ${employee.emp_name} , ${employee.emp_dept} , ${employee.emp_salary},${employee.emp_company}`);
    }
}
console.log(`---------------------------------------------------------------`);

