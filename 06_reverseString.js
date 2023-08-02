let reverseString = function(str) {
    let res = "";
    var i = str.length-1;
    while (i>=0) 
    {
        if (str[i] !== " ") 
            res += str.charAt(i);
            i--;
        }
    console.log(`Reverse String= ${res}`);
}

reverseString("Hard work always pays back");
reverseString("Soon i will be angular it champ");