console.log(`------------------------------Assignmnet 2----------------------`);
function marriageEligibility(gender,age){

    if (gender=="Female" || age>=18){
        console.log(`Your ${gender} and your age ${age} is then you are eligible to marraige.`);
    }
    else if (gender=="Male" || age>=21) {
        console.log(`Your Gender ${gender} is and your ${age} is then you are eligible to marraige`);
    }
    else if (gender=="other" || age==undefined) {
        console.log(`gender ${gender} your age ${age} is undefined `);
    }
    else
    console.log(`Your ${gender} and your age ${age} is than you are not eligible for marriage`);
    console.log(`------------------------***----------------`);
}
marriageEligibility("male" , 17);
marriageEligibility("male" , 25);
marriageEligibility("Female" , 28);
marriageEligibility("Female" , 16);
marriageEligibility("other" , 35);
marriageEligibility("other" , 41);