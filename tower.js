// copilot: disable
//17/4/25
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

//task
// 1.สร้าง tower โดยจำนวนชั้นจะถูกกำหนดโดย nFloors
// 2.เป็นการสร้าง ช่องว่างสลับกับดาว
// 2. ชั้นที่ 1 จะมีดาว 1 ดวง
// 1. ชั้นล่างสุดจะมีดาว 2n-1 ดวง
// 3.ดาวต้องอยู่กลาง

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    const numStars = 2 * i + 1;
    const numSpaces = nFloors - i - 1;
    const floor =
      " ".repeat(numSpaces) + "*".repeat(numStars) + " ".repeat(numSpaces);
    tower.push(floor);
  }
  return tower;
}
console.log(towerBuilder(1)); // ["  *  ", " *** ", "*****"]
console.log(towerBuilder(3)); // ["  *  ", " *** ", "*****"]
console.log(towerBuilder(4)); // ["  *  ", " *** ", "*****"]
console.log(towerBuilder(5));