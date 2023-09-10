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
  console.log(`-----------------------------------------------step 1 ----------------------------------`);
  const arraysort = arrayEmployees.sort((emp1,emp2 )=>emp1.emp_id > emp2.emp_id ? 1 : -1);
  for (const emp of arraysort) {
console.log(` employee id  :${emp.emp_id}   employee Name : ${emp.emp_name} Department : ${emp.emp_dept} `);
  }
  console.log(`-----------------------------------------step 2------------------------------`);
  const arrayDepartment = arrayEmployees.sort((dep1,dep2)=>dep1.emp_dept > dep2.emp_dept ? 1 : -1 );
  for (const emp of arrayDepartment) {
    console.log(`Employee id is : ${emp.emp_id} Department of employee is : ${emp.emp_dept} company of employee is : ${emp.emp_company}`);
  }
  console.log(`----------------------------------------step 3 -----------------------------`);
  const arraysalary = arrayEmployees.sort((emp1,emp2)=> emp1.emp_salary < emp2.emp_salary ? 1 : -1);
  for (const emp of arraysalary) {
    console.log(`employee name : ${emp.emp_name} salary of employee is : ${emp.emp_salary} company of employee is : ${emp.emp_company}`);
  }