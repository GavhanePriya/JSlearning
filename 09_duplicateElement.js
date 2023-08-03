let array = [4,5,4,5,8,5,7,8,9,7,8];
    const uniqueArr = [];
  
    for (let i = 0; i < array.length; i++) {
      let isDuplicate = false;

      for (let j = 0; j < uniqueArr.length; j++) {
        if (array[i] === uniqueArr[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArr.push(array[i]);
      }
    }
  const uniqueArray = array;
  console.log(array);
  console.log(`Remove duplicate Element : ${uniqueArr}`); 
  