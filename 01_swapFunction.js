function swap(name1, name2){
    console.log('Inside swap function');
    console.log('Before Swap=> name1', name1, " name2", name2 );
    var temp = name1;
    name1 = name2;
    name2 = temp;
    console.log('After Swap=> name1', name1, " name2", name2 );
}
name1 = "Sweety";
name2 = "Cutie";
swap( name1 , name2);
console.log('----------------------------------------------------------');
num1 = "100";
num2 = "200";
num3 = "300";
swap('Before Swap=>num1' , num2, "num2",num3,"num3");
var temp = num1;
num1 = num2;
num2 = num3;
swap('After Swap=>num1',num1,"num2", num2, "num3",num3);