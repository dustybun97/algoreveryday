//2/5/25
//Grading Students function ปัดคะแนนสอบ
//rules การปัดเกรด
//1.คะแนนสอบน้อยกว่า 38 สอบตก ไม่ปัด
//2.คะแนนมากกว่า 38 และส่วนต่างของคะแนนสอบ กับเลขที่หาร 5 ลงตัวที่ใกล้ที่สุด หักลบกันแล้วน้อยกว่า 3 จะปัดไปหาเลขนั้น เช่น คะแนนสอบได้ 73 คะแนน ,เลขที่หาร 5 ลงตัวที่ใกล้ที่สุดคือ 75 ; 75-73 < 3 ดังนั้น คะแนนปัดไป 75
//3. คะแนนมากกว่า 38 และส่วนต่างของคะแนนสอบ กับเลขที่หาร 5 ลงตัวที่ใกล้ที่สุด หักลบกันแล้วมากกว่า 3 จะไม่ปัด ใช้คะแนนเดิม

//task
//1.
let grades = [73, 67, 38, 33];
function gradingStudents(grades) {
  // Write your code here
  let newGrades = [];
  for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    if (grade < 38) {
      newGrades.push(grade); //ไม่ปัด
    } else {
      let nextMultipleOf5 = Math.ceil(grade / 5) * 5; //ใช้หาเลขถัดไปที่หาร 5 ลงตัว Math.ceil เป็นการปัดเลขขึ้น
      let diff = nextMultipleOf5 - grade;

      if (diff <= 3) {
        newGrades.push(nextMultipleOf5); //ปัดขึ้น
      } else {
        newGrades.push(grade); //ไม่ปัด
      }
    }
  }
  return newGrades;
}
console.log(gradingStudents(grades));
