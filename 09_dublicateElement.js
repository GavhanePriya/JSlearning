let array = [4,5,4,5,8,5,7,8,9,7,8];
function removeDuplicates(arr) {
    const uniqueArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      
      for (let j = 0; j < uniqueArr.length; j++) {
        if (arr[i] === uniqueArr[j]) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) {
        uniqueArr.push(arr[i]);
      }
    }
  
    return uniqueArr;
  }
  
  const uniqueArray = removeDuplicates(array);
  console.log(array);
  console.log(`Remove Duplicate array : ${uniqueArray}`); 
  