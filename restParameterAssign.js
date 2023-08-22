function add(num1, num2, ...num ){
    
       var sum = 0;
       for (let index = 0; index < num.length; index++) {
                sum+=num[index];    
       }
       console.log(`num1 = ${num1},  num2 = ${num2}`);
       console.log(num);
       let result =+sum;
       console.log(`The total  Addition of Array: ${result} `);
   }
   
   add(5, 6);
   console.log(`-----------------***--------------`);
   add(9, 5, 6);
   console.log(`-----------------***--------------`);
   add(78, 90, 51, 68);
   console.log(`-----------------***--------------`);
   add(89, 90, 45,78, 90, 51, 68);
   console.log(`-----------------***--------------`);