function stringHandsOn(){
    var string = ("     Hey you are doing good,keep it up       ");
    console.log(`------------------------------step1-----------------------------`);
     console.log(`Given string is: ${string}`);
     console.log(`------------------------------step2----------------------------`);
     var lengthString = string.length;
     console.log(`Length of string is:-`,lengthString); 
    console.log(`--------------------------------step3---------------------------`);
    var result = string.trim();
    console.log(`After Trim string is==>${result}and it's length is==>${result.length}`);
    console.log(`----------------------------------step4---------------------------`);
    var resultTrimStart = string.trimStart();
    var trimStartLength = resultTrimStart.length;
    var startSpaces = string.length-trimStartLength;
    console.log(`Start Spaces is==> ${startSpaces}`);

    var resultTrimEnd = string.trimEnd();
    var trimEndLength = resultTrimEnd.length;
    var endSpaces = string.length-trimEndLength;
    console.log(`End Spaces is ==>${endSpaces}`);

    var string = endSpaces  + startSpaces;
    console.log(`Total number of Extra Spaces is==> ${string}`);
    console.log(`--------------------------------step5----------------------------`);
    console.log(`Hey you are doing good,keep it up`);
    var chatat=result.charAt(0);
    var last=result.charAt(result.length-1);
    console.log(`First Character is: ${chatat}`)
    console.log(`last Character is: ${last}`);
    console.log(`---------------------------------step6----------------------------`);
    var string = result.split(' ');
    var words = string.length;
    console.log(`Total number of words are ==>${words}`);
    console.log(`----------------------------------step7---------------------------`);
    var afterTrim = result.indexOf('good');
    console.log(`the index good is==>,${afterTrim}`);
    console.log(`----------------------------------step8---------------------------`);
    // console.log(`Hey you are doing good,keep it up`);
    var result  = result.slice(22);
    console.log(`Slice from Index 22 is ==>${result}`);
    console.log(`--------------------------------- step9----------------------------`);
    var resultTrim = resultTrimEnd.endsWith(`up`);
 console.log(`String End with up word :${resultTrim}`);
    console.log(`-----------------------------------step10--------------------------`);
    var result = resultTrimStart.startsWith(`Hey`);
    console.log(`String Starts with Hey word :${result} `);
}
stringHandsOn();
