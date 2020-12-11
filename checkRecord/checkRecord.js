/*****************************Student Attendance Record I*******************************
 * You are given a string representing an attendance record for a student. The record only contains the following three characters:
 * 'A' : Absent.
 * 'L' : Late.
 * 'P' : Present.
 * A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
 * You need to return whether the student could be rewarded according to his attendance record.
 * 
 * Example 1:
 * Input: "PPALLP"
 * Output: True
 * 
 * Example 2:
 * Input: "PPALLL"
 * Output: False
*/

var checkRecord = function(s) {
  let absent = 0;
  let late = 0;
  
  s = s.split('');
    
  while (s.length > 0) {
    let current = s.splice(0, 1);
    if (current[0] === 'A') {
      if (absent === 1) {
        return false;
      }
      absent += 1;
      late = 0;
    } else if (current[0] === 'L') {
      if (late === 2) {
        return false;
      }
      late += 1;
    } else {
      late = 0;
    }
  }
  return true;
};