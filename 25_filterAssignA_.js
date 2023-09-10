console.log(`--------------------------------Assignmnet 1-------------------`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  let arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi,];
  console.log(`-------------------------------------------step 1-------------------------------`);
  arrayEmployees.filter(employee=>employee.emp_company==='TCS')
  .map(employee=>employee.emp_name)
  .forEach(empname => console.log(empname))
  console.log(`-------------------------------------------step 2 -----------------------------`);
  const WiproEmployees = arrayEmployees.filter((employee)=> {
    return employee.emp_company== "Wipro";
  });

  let salarySum=0;
  for (const employee of WiproEmployees) {
    salarySum = salarySum + employee.emp_salary;
  }
  console.log(`Average salary from Wipro company is : ${salarySum/WiproEmployees.length}`);
  console.log(`-------------------------------------step 3-------------------------------`);
   const averageTotal = arrayEmployees.filter((employee)=>{
    return employee.emp_company ==="Wipro" || employee.emp_company ==="Infy";
   })
    let AverageSum = 0;
    for (const employee of averageTotal) {
        AverageSum = AverageSum+employee.emp_salary;
        
    }
    console.log(`The average salry sum of wipro and Infy is  :${AverageSum/averageTotal.length}`);
    console.log(`----------------------------------------*****------------------------------`);