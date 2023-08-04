let professor = 
{
    Name : "Ravi",
    MobileNo : 564295689,
    Education : "PH.D",
    age : 29,
    Add : "Pune",
    State : "MH",
    Degree  :
    {
        engineering : "CSC",
        PHD : "Adv Coumputing",
        BSC : "Agriculture",
        BCA : "Programming",
        // also add one array : certificate.
        getDegree : function(){
            console.log(`Professor Degree :${this.engineering},${this.PHD},${this.BSC},${this.BCA}`);
        }
    },
    Certificates : ['Hacker Rank Prticipition','Certificate in IFE course','Certificate in Adv Programming']
}
console.log(`-------------------------step1-------------`);
console.log(professor);
console.log(`----------------------------step2-------------------`);
professor.Degree.getDegree();
console.log(`------------------------step3-----------`);

console.log("Certificates :",professor.Certificates);
console.log(`-------------------step 4--------------`);
// Add a function and concat all degrees and return on string log on console.
console.log(professor.Degree);
professor.Degree.getDegree();
console.log(`-------------------step 5------------`);
professor.totalExprience = "14Years";
console.log(`Total Year of Exprience :,${professor.totalExprience}`);
 console.log(`-----------------step6------------------ `);
//  Modify the property:-
professor.age = 30;
console.log(professor);
console.log(`-------------------step 7----------------`);
// Add one certificate on end of array.
professor.Certificates.push("Oracle Certificates");
console.log("Certificates:",professor.Certificates);
console.log(`-----------------------------step8-------------------`);
len = professor.Certificates[professor.Certificates.length-1];
console.log(`Last Element in array :${len}`);
console.log(`---------------------------------End------------------`);

