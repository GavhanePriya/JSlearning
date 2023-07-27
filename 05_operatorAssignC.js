var graduation = function(gradScore,hscScore,sscScore,candidateName){

    var result = (gradScore>=70 || hscScore>= 80 || sscScore>=90) ? console.log(`Congrats ${candidateName}, Your Eligible for TCS Interview`) : console.log(`Sorry ${candidateName}, Unfortunently you are  Not Eligible for TCS Interview`);
    console.log(`------------------******------------------------`);
}
graduation(80 , 86, 90 ,"Priya");
graduation(70 , 65, 55 ,"Komal");
graduation(60 , 79, 88 ,"Kajal");
