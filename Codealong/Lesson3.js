// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  function maxOfThree(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if (y >= x && y >= z) {
      return y;
    } else {
      return z;
    }
  }
  
  console.log(maxOfThree(3, 9, 98));
  
  //3
  function isCharAVowel(char) {
    var vowels = "aeiouAEIOU";
  
    return vowels.indexOf(char) !== -1;
  }
  
  console.log(isCharAVowel("a")); // Expected output: true
  
  //4
  
  let sumArray = function (arr) {
    let sum = 0;
    arr.forEach(function (n) {
      sum += n;
    });
    return sum;
  }
  
  console.log(sumArray([6, 4, 33]));
  
  //5
  
    let multiplyArray = function (arr) {
      return arr.reduce(function (accumulator, currentValue) {
        return accumulator * currentValue;
      });
    }
  
  console.log(multiplyArray([6, 4, 33]));
  
  //6
  const numArgs = function(n){
    return arguments.length
  }
  
  console.log(numArgs(2, 4, 'ss', 'dwad'))
  
  //7
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString("hello"));
  
  //8
  
  const longest = function(arr){
  
  let element = arr.reduce(
      function (a, b) {
        let strA = typeof a === 'string' ? a : String(a);
        let strB = typeof b === 'string' ? b : String(b);
      return strA.length > strB.length ? a : b;
      }
  
  );
    return element;
  }
  
  console.log(longest(['test', 2323, 'KJHLKJHlkjhlkjhlk', 'KLKJHLKJAHDLKJHLKJKLJ']))
  
  // 9
  const stringsLongerThan = function(arr, num){
    return arr.filter(function(str){
      return str.length > num;
    })
  
  }
  
  console.log(stringsLongerThan(['test', 'awdawd', 'testTEst'], 4))
  
  