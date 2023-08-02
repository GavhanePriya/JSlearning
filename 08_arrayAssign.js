console.log(`--------------------------------------Assignment 1 ------------------------------`);
var array= ["Banna","Orange","Apple","Mango","Water Melon"];
console.log(array);
console.log(`--------------------------------Step1-----------------------`);
var firstElment =array[0];
var lastElement = array[array.length -1]
console.log(`First element:${firstElment}`);
console.log(`Last element:${lastElement}`);

 console.log(`------------------------------step2------------------------`);
 console.log(`Add Element : Papaya befor Banana `);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
 array.unshift("Papaya");
 console.log(array);
 console.log(`------------------------------step3------------------------`);
 console.log(`Remove Mango from the array`);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
 array.splice(3,1);
 console.log(array);
 console.log(`-------------------------------step4------------------------`);
 console.log(`Add element are Pinapple are last position`);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
 array.push("pineapple");
 console.log(array);
 console.log(`-------------------------------step5------------------------`);
 console.log(`Insert element Dreagon Fruit are before Watre Melon`);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
 array. splice(4,0,`Dragon Fruit`);
 console.log(array);
 console.log(`------------------------------step6-------------------------`);
 console.log(`REplace e element :Orange with kiwi`);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
 array.splice(1,0,"kiwi"); 
 console.log(array);
 console.log(`-------------------------------step7---------------------------`);
 console.log(`Log the elements starting from index 1 to 4`);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
 for (let index = 1; index <=4; index++){
    console.log(array[index]);
 }
 console.log(`--------------------------------step8-----------------------------`);
 console.log(`only last 3 elements log on console`);
 var array= ["Banna","Orange","Apple","Mango","Water Melon"];
   array.splice(0,2);
 console.log(array);
 console.log(`------------------------------------end--------------------------`);
 
 