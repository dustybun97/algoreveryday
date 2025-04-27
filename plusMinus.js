//25/4/25
// Given an array of integers, calculate the ratios of its elements that are , , and . Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements: two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000
// Function Description

// Complete the  function with the following parameter(s):

// : an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

//task
//1.สร้าง variable มารับค่าเลข positive,negative,zero
//2.สร้าง n แทน length ของ array เพื่อนำไปหารต่อ
//3.loop เทียบค่าทุกตัวใน array กับเงื่อนไข
//4.log ค่าตามที่โจทย์ต้องการ (ทศนิยม 6 ตำแหน่ง) แบบแยกบรรทัด

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  const n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  console.log((positive / n).toFixed(6));
  console.log((negative / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}
