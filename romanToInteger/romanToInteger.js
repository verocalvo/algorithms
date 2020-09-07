let integers = {
    'I' : 1,
    'IV' : 4,
    'V' : 5,
    'VI' : 6,
    'IX' : 9,
    'X' : 10,
    'XL' : 40,
    'L' : 50,
    'XC' : 90,
    'C' : 100,
    'CD' : 400,
    'D': 500,
    'CM' : 900,
    'M' : 1000
   }
   
   var romanToInt = function(s) {
     let total = 0;
     for (let i = 0; i < s.length; i++) {
       if (s[i] === 'I' && s[i + 1] === 'V' || s[i] === 'V' && s[i + 1] === 'I' || s[i] === 'I' && s[i + 1] === 'X' || s[i] === 'X' && s[i + 1] === 'C' || s[i] === 'C' && s[i + 1] === 'M' || s[i] === 'C' && s[i + 1] === 'D' || s[i] === 'X' && s[i + 1] === 'L') {
         total += integers[s[i] + s[i + 1]]
         i += 1;
       } else {
         total += integers[s[i]];  
       }
     }
     return total;
   };