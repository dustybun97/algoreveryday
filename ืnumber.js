//18/4/25
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]

//task
//1.ดู output ว่าออกเป้น array ต้องสร้าง array [] มารอรับค่า
//2.สรา้ง loop let i=1,i <= n; i++ ให้ .push(x*i) ใน array

function multiplesByX(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}

console.log(multiplesByX(2, 5));
