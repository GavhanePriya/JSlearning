console.log('..............................*Step1*........................');
function show(){
    console.log('My Name is Priya Amol Gavhane.');
    console.log('I Am from pune');
    console.log('JS learning');
}
show();
console.log('..............................*Step2*.........................');
function personalDetalis(){
    console.log('First Name==>' , "Priya");
    console.log('Last Name==>', "Gavhane");
    console.log('Collage Name==>',"Ghandhi,collage");
}
personalDetalis();
console.log('...............................*Step3*........................');
var value1 = "Virat";
var value2 = "Anushka";
console.log('Befor Swap:-','value1==>', value1 , 'value2==>', value2);
console.log('After Swap:-', 'value1==>', value2 , 'value2==>',value1);
console.log('                               ****                            ');
var value1 = 1000;
var value2 = 2000;
console.log('Befor Swap:-', 'value1==>', value1 , 'value2==>', value2);
console.log('After Swap:-', 'value2==>' , value2 , 'value2==>', value1);
console.log('-------------------------------*Step4*--------------------------');
function addThreeValues(arg1 , arg2 , arg3){
    var result = arg1 + arg2 + arg3;
    return result;
}
var result = addThreeValues(10.23 , 600 , 40);
console.log('Addition is :- ' , result);

var result = addThreeValues("Hello" , "Good", "Morning");
console.log('Addition is :-' , result);
console.log('----------------------------------*Step5*------------------------');
function bankDetails(BankName , AccountNumber , Location , PinCode){
    console.log('Bank Name','bank name','Account Number', 'Account Number' , 'location', 'Loction' , 'pinCode', 'Pincode');
}
console.log('Bank Name:-','CITI Bank','Account Number:-',3456782345,'Location:-','Pune','PinCode:-',431202);
console.log('Bank Name:-','Axis Bank','Account Number:-',7856782345,'Location:-','Mumbai','pinCode:-',441202);
console.log('Bank Name:-','HDFC Bank','Account NUmber:-',8956782345,'Location:-','Pune','PinCode:-',631202);