//30/4/25
// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the  function with the following parameter(s):

// : an integer
// Print

// Print a staircase as described above. No value should be returned.
// Note: The last line is not preceded by spaces. All lines are right-aligned.

// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Sample Input

// 6
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

//task
//1.loop สร้างบันไดประกอบด้วย # และ " "
//2.สร้าง variable ช่องว่าง และ ขั้นบันได
//3.ใช้ .repeat ในการสร้าง # และ " "
//4.log ค่า

function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    //i =1 ชั้นแรกจะไม่เป็นช่องว่างทั้งหมด i=0 จะเป็นช่องว่างทั้งหมด
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

staircase(5);
