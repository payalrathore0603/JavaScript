// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// Palindroms:1234321

function isStringPalindrom(str){
    // let palindromeStr="";
    // for (let index = str.length-1; index >=0 ; index--) {
    //      palindromeStr +=str[index]
    // }
    // console.log(str,palindromeStr)
    // if(str==palindromeStr){
    //     console.log("It's a panlidrome");
    // }
    // else{
    //     console.log("It's not a panlidrome");
    // }
    return str==str.reverse();
}

console.log(isStringPalindrom("123454321"));