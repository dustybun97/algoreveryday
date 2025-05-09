//5/5/25
// function นับจำนวน type นกที่ซ้ำและเลข type น้อยสุด
//ตัวอย่าง birds = [1,4,4,4,5,5,5,3,3] answer is 4
//task
//1.สร้าง object เปล่ามาเก็บ type และ จำนวนของ birds
//2.loop ผ่าน array เพื่อหาจำนวน birds แต่ละ type
//3.if-else ถ้ามี birds type นั้น อยู่ใน object แล้ว ให้ +1
//4.else ไม่มีให้เป็น 1
//5.หา type birds ที่เยอะที่สุด
//6.output เป็น id ของ birds ที่จำนวนมากสุด

function migratoryBirds(arr) {
  const birdCounts = {};

  // นับจำนวนนกแต่ละประเภท
  for (let i = 0; i < arr.length; i++) {
    const bird = arr[i];
    if (birdCounts[bird]) {
      birdCounts[bird]++;
    } else {
      birdCounts[bird] = 1;
    }
  }

  // หาประเภทนกที่เจอบ่อยที่สุด
  let maxCount = 0;
  let resultId = Infinity;

  const keys = Object.keys(birdCounts); // แปลง key ของ object เป็น array ก่อน

  for (let i = 0; i < keys.length; i++) {
    const birdId = parseInt(keys[i]);
    const count = birdCounts[birdId];

    if (count > maxCount || (count === maxCount && birdId < resultId)) {
      maxCount = count;
      resultId = birdId;
    }
  }

  return resultId;
}

console.log(migratoryBirds([1, 1, 2, 2, 3, 2]));
console.log(migratoryBirds([4, 4, 4, 2, 2, 1]));
