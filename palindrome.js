//16/4/2025
// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true
// palindrome(1294) => false
// palindrome("109982") => "Not valid"

// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

// task
// 1. Check if the input is a number and greater than or equal to 0
// 2. Convert the number to a string and check if it is a palindrome
// 3. If it is a palindrome, return true, otherwise return false

function palindrome(num) {
  if (typeof num !== "number" || num < 0) {
    return "Not valid";
  }
  let str = num.toString();
  let reversedStr = str.split("").reverse().join("");
  //   console.log(reversedStr);
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome(12312));
