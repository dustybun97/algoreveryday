//23/4/25
//task
//1.โจทย์ให้นับจำนวน จึงต้องlet variable มานับ
//2.กำหนด variable มาเก็บสระ aeiou
//3.loop ผ่าน member ทุกตัวใน words
//4.if ใน loop ว่าถ้า words แต่ละตัวอักษรมี vowels ให้ count++
//5.return count
let words ="hello world"
function vowelsCount(words){
  let count = 0;
  let vowels ="aeiou"
  for (let i = 0; i < words.length; i++) {
    if (vowels.includes(words[i])) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount(words));