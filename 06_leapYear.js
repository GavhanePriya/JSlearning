console.log(`-------------------------Assignmnet 3----------------------`);
var leapYear = function(year){
    var result  = year;
    if (year === null || year === undefined || year==="String" ) {
        console.log(year + " Invalied Data.");
        console.log(`-----------------***---------------`);
    }
    else if ((year % 4 === 0 && year % 100 !==0)|| year % 400 === 0){
        console.log(year +" Is a leap yera.");
        console.log(`----------------***-----------------`);
    }
    else{
        console.log( year + " Not a Leap year.");
        console.log(`----------------***----------------`);
    }
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
