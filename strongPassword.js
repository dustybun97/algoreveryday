// 6/5/25
// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:

// numbers = "0123456789"
// lower_case = "abcdefghijklmnopqrstuvwxyz"
// upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// special_characters = "!@#$%^&*()-+"

// task
//1.ตรวจสอบเงื่อนไข จาก parameter ที่ส่งเข้ามา
//2.นับเงื่อนไขที่ขาด
//3.return จำนวนเงื่อนไขที่ขาด

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let hasNumber = false;
  let hasLower = false;
  let hasUpper = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (numbers.includes(char)) hasNumber = true;
    else if (lower_case.includes(char)) hasLower = true;
    else if (upper_case.includes(char)) hasUpper = true;
    else if (special_characters.includes(char)) hasSpecial = true;
  }

  let missingTypes = 0;
  if (!hasNumber) missingTypes++;
  if (!hasLower) missingTypes++;
  if (!hasUpper) missingTypes++;
  if (!hasSpecial) missingTypes++;

  return Math.max(missingTypes, 6 - n);
}

console.log(minimumNumber(3, "Ab1"));
