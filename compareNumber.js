// 24/4/25
// Example

// a = [1, 2, 3]
// b = [3, 2, 1]

// For elements *0*, Bob is awarded a point because a[0] < b[0].
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// The return array is [1, 1] with Alice's score first and Bob's second.

// Function Description

// Complete the function compareTriplets with the following parameter(s):

// int a[3]: Alice's challenge rating
// int b[3]: Bob's challenge rating
// Returns

// int[2]: the first element is Alice's score and the second is Bob's score
// Input Format

// The first line contains 3 space-separated integers, a[0], a[1], and a[2], the respective values in triplet a.
// The second line contains 3 space-separated integers, b[0], b[1], and b[2], the respective values in triplet b.

//task
//1.สร้าง variable มารับค่าคะแนน
//2.loop เข้าสมาชิกทุกตัวเพื่อเทียบค่า
//3.ใช้ math.min เทียบเลขแต่ละ index
//4.if ให้เลขจาก array ไหนมากกว่าให้ +ให้ array นั้น
//5.return ค่าออกมาใน array ตามที่โจทย์ต้องการ

let a = [5, 6, 7];
let b = [3, 6, 10];

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] < b[i]) {
      bob += 1;
    }
  }
  return [alice, bob];
}

console.log(compareTriplets(a, b));
