var gradeCalculation = function(mark){
    if (mark===null || mark===undefined || isNaN(mark)|| mark<0 || mark>100) {
        console.log(`Plaese provide a valid number.`)
        }
        else if (mark>=90)
        { 
            console.log(`Fantastic marksc:${mark} mark your grade A+`);
        }
        else if(mark>=75 && mark<90)
        {
            console.log(`Excelent mark:${mark}Your Grade is A `);
        }  
        else if(mark>=50 && 75)
        {
        console.log(`Good marks ${mark} your grade is B`);
        }
        else if(mark>=35 && 50)
        {
            console.log(`Marks is ${mark} your grade is c ,Need improvment`);
        }
        else {
            console.log(`please provide the valid number :${mark}`);
        }
    }
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eight");
gradeCalculation(undefined);
gradeCalculation(null);