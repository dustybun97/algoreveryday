//  29/4/25
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the  function with the following parameter(s):

// : a time in  hour format
// Returns

// : the time in  hour format
// Input Format

// A single string  that represents a time in -hour clock format (i.e.:  or ).

// Constraints

// All input times are valid
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

//task
//1.ตรวจสอบเวลาว่าเป้น am,pm
//2.แยกเวลาเป็น hr,min,sec โดยตัด am,pm ออก
//3.condition ถ้าเป็น am ให้เวลา 12 am = 00 และ ถ้าเป็น pm ให้ hr + 12
//4.return ผลลัพธ์

let s = "07:05:45PM";
//output : "19:05:45"
function timeConversion(s) {
  // Write your code here
  let period = s.slice(-2);
  let [hours, minutes, seconds] = s.slice(0, -2).split(":");
  if (period === "AM") {
    if (hours === "12") {
      hours = "00";
    }
  } else {
    if (hours !== "12") {
      hours = String(Number(hours) + 12); // บวก 12 เข้าไป
    }
  }

  return `${hours}:${minutes}:${seconds}`;
}
console.log(timeConversion(s));
