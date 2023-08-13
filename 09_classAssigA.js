class vehicle {
    constructor(make,model,color,year,mileage){
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
        this.mileage = mileage;
    }
    show(){
        console.log(`Vehicle Details is: Make${this.make},model${this.model},color${this.coclor},year${this.year},mileage${this.mileage}`);
    }

}
let vehicle1 = new vehicle("Toyota","Camry","Blue",2020,25000);

let vehicle2 = new vehicle("Ford","Mustang","red",2019,33000);

let vehicle3 = new vehicle("Honda","Civic","Silver",2018,50000);

let vehicle4 = new vehicle("Chevrolet","Sliverado","Black",2021,35000);

let vehicle5 = new vehicle("Nissan","Altima","White",2020,25000);

const arrayOfVehicle =[vehicle1,vehicle2,vehicle3,vehicle4,vehicle5];
console.log(`Traversing Array`);
for (const vehicle of arrayOfVehicle) {
    vehicle.show();
}
console.log(`<-------------------------------------------2nd-------------------------------------------`);
  class College {
    constructor(name,location,city,pincode){
        this.name= name;
        this.location= location;
        this.city= city;
        this.pincode =pincode;
    }
       display(){
            console.log(`College Name = ${this.name}, Location = ${this.location}, City = ${this.city}, Pincode = ${this.pincode}`)
        }  
       
  }
  let college1 = new College("COEP College", "Shivaji Nagar", "Pune", 411001);
 
  let college2 = new College("MIT College", "Mumbai", "Boriwali", 423029);
  let college3 = new College("Shivali College", "Karad rd", "Karad", 521108);
  let college4 = new College("Shahu College", "Navi Peth", "Kolhapur", 410288);

 college1.display();
 college2.display();
 college3.display();
 college4.display();
    
console.log(`<-------------------------------------------3rd------------------------------------------`);
class College1 {
    constructor(name,location,city,pincode){
        this.name= name;
        this.location= location;
        this.city= city;
        this.pincode =pincode;
    }
}
function traverseObject(obj){
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`${key} = ${element}`);
    }
   
}
console.log("................................");
}
  let collegeA= new College("COEP College", "Shivaji Nagar", "Pune", 411001);
  let collegeB = new College("MIT College", "Mumbai", "Boriwali", 423029);
  let collegeC = new College("Shivali College", "Karad rd", "Karad", 521108);
  let collegeD = new College("Shahu College", "Navi Peth", "Kolhapur", 410288);

  traverseObject(collegeA);
  traverseObject(collegeB);
  traverseObject(collegeC);
  traverseObject(collegeD);
    