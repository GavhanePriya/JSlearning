console.log(`------------------------Assignment 1----------------`);
console.log(`---------------------step 1---------------------`);
let vowel=function (str){
     let count = 0;
     var index = 0;
    while (index <= str.length ) 
    {
        let char = str.charAt(index)
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U')
                console.log(char);
         count = count + 1;
         index++;
            }
     console.log(`Total number of vowel is==>${count}`);

}
vowel("I am very good IT Developer");
console.log(`------------------------sep2--------------------`);
let cube = function (){ 
    let cubeTotal = 0;
    index = 1;
    while (index<=5) {
        let a=index*index*index;
       cubeTotal=cubeTotal+a;
       index++;
    }
    console.log(`Cube Total =${cubeTotal}` );
}
cube();
console.log(`--------------------Step 3-------------------`);
let oddPosition = function(String){
    let output = "";
      var i = 0;
    while (i<String.length) 
    {
        if(i%2!==0 && String.charAt(i)!==" ")
            output+=String.charAt(i); 
            i++;
        }
    console.log(output);
    console.log(`---------------------------------------`);
}
oddPosition("Hard work aleays pays back");
oddPosition("Soon i will be angular it champ");