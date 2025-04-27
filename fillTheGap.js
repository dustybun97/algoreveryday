//21/4/25
// Background:
// At work I need to keep a timesheet, by noting which project I was working on every 15 minutes. I have an timer that beeps every 15 minutes to prompt me to note down what I was working on at that point, but sometimes when I'm away from my desk or working continuously on one project, I don't note anything down and these get recorded as null.

// Task:
// Help me populate my timesheet by replacing any null values in the array with the correct project name which is given by surrounding matching values.

// Examples:
// fill_gaps([1,null,1]) -> [1,1,1]   # Replace nulll values surrounded by matching values
// fill_gaps([1,null,null,null,1]) -> [1,1,1,1,1]  # There may be multiple nulls
// fill_gaps([1,null,1,2,null,2]) -> [1,1,1,2,2,2]  # There may be multiple replacements required
// fill_gaps([1,null,2,null,2,null,1]) -> [1,null,2,2,2,null,1]  # No nesting.
// fill_gaps([1,null,2]) -> [1,null,2] # No replacement if ends don't match
// fill_gaps([null,1,null]) -> [null,1,null] # No replacement if ends don't match off the ends of the array
// fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']) -> ["codewars", "codewars", "codewars", "codewars", "real work", "real work", "real work", "real work"] # Works with strings too

//task
//1.สร้าง array ใหม่ โดยใช้ spread operation clone array ตั้งต้นเพื่อ ไม่ให้ array ตั้งต้นเปลี่ยนแปลง
//2.loop ผ่านสมาชิกทุกตัว และ if ตามเงื่อนไขที่โจทย์ต้องการ และเพิ่มเงื่อนไขด้วย &&
function fill_gaps(arr) {
    const result = [...arr];

    for (let i = 1; i < result.length - 1; i++) {
        if (result[i] === null && result[i - 1] !== null && result[i - 1] === result[i + 1]) {
            result[i] = result[i - 1];
        }
    }

    return result;
}

console.log(fill_gaps([1, null, 1])); 
output:// [1, 1, 1]

console.log(fill_gaps([1, null, null, null, 1])); 
output:// [1, 1, 1, 1, 1]

console.log(fill_gaps([1, null, 1, 2, null, 2])); 
output:// [1, 1, 1, 2, 2, 2]

console.log(fill_gaps([1, null, 2, null, 2, null, 1])); 
output:// [1, null, 2, 2, 2, null, 1]

console.log(fill_gaps([1, null, 2])); 
output:// [1, null, 2]

console.log(fill_gaps([null, 1, null])); 
output:// [null, 1, null]

console.log(fill_gaps(['codewars', null, null, 'codewars', 'real work', null, null, 'real work']));
// output:[
//     'codewars',  null,
//     null,        'codewars',
//     'real work', null,
//     null,        'real work'
//   ]