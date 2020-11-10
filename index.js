// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString("hello") === "olleh"

function reverseString(str) {
  // Method 1 (My Solution)
  // return str.split("").reverse().join("");

  // Method 2 (My Solution)
  // let reversedStr = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr += str[i];
  // }
  // return reversedStr;

  // Method 3 (My Solution)
  // let reversedStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   reversedStr = str[i] + reversedStr;
  // }
  // return reversedStr;

  // Method 4 (My Solution)
  // let reversedStr = "";
  // for (let char of str) {
  //   reversedStr = `${char}${reversedStr}`;
  // }
  // return reversedStr;

  // Method 5 (My Solution)
  // let reversedStr = "";
  // str.split("").forEach(char => reversedStr = char + reversedStr);
  // return reversedStr;

  // Method 6 (My Solution)
  return str.split("").reduce((accumulator, current) => current + accumulator, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// ex. isPalindrome("racecar") === true, isPalindrome("hello") === false

function isPalindrome(str) {
  // Method 1 (My Solution)
  return str === str.split("").reverse().join("");
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex: reverseInt(521) === 125

function reverseInt(int) {
  // Method 1 (My Solution without Math.sign)
  return parseInt(String(int).split("").reverse().join("")) * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizedLetters("i love javascript") === "I Love Javascript"

function capitalizedLetters(str) {
  // Method 1 (My Solution)
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word = word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Method 2 (My Solution)
  // let arr = str.toLowerCase().split(" ");
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  // }
  // return arr.join(" ");

  // Method 3
  // return str.replace(/\b[a-z]/gi, function(char) {
  //   return char.toUpperCase();
  // });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string 
// ex. maxCharacter("javascript") == "a"

function maxCharacter(str) {
  // Method 1 (My Solution)
  // const charsArr = str.toLowerCase().split("");
  // let uniqueChars = [];
  // let objArr = [];
  // let maxChar = {char: "", count: 0};

  // str.split("").forEach(char => {
  //   if(!uniqueChars.includes(char)) uniqueChars.push(char);
  // })

  // uniqueChars.forEach(unique => {
  //   let newObj = {char: unique, count: 0};
  //   charsArr.forEach(char => {
  //     if (unique === char) newObj.count++;
  //   })
  //   objArr.push(newObj);
  // })

  // objArr.forEach(obj => {
  //   if(obj.count > maxChar.count) {
  //     maxChar = {char: obj.char, count: obj.count}
  //   }
  // })

  // return maxChar.char;

  // Method 2
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach(char => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multipes of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord("Hello, my name is Can") === "hello"
// ex. longestWord("Hello there, my name is Can") === ["hello", "there"]

function longestWord(sen) {
  // Method 1 (My Solution)
  // const wordMap = {};
  // let maxLength = 0;
  // let longestWords = [];

  // sen.toLowerCase().split(" ").forEach(word => {
  //   word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

  //   if(!wordMap[word]) {
  //     wordMap[word] = word.length;
  //   } 
  // })

  // for(word in wordMap) {
  //   if (wordMap[word] >= maxLength) {
  //     longestWords.push(word);
  //     maxLength = wordMap[word];
  //   }
  // }

  // return longestWords.length > 1 ? longestWords : longestWords.join("");

  // Method 2
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sorted.filter(word => word.length === sorted[0].length);

  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3],[4,5,6],[7]]
// ex. chunkArray([1,2,3,4,5,6,7], 2) === [[1,2],[3,4],[5,6],[7]]

function chunkArray(arr, len) {
  // Method 1 (My Solution)
  // let returnArray = [];
  // let [startIndex, endIndex] = [0, len - 1];

  // while(startIndex < arr.length) {
  //   let chunkArr = [];

  //   for(let i = startIndex; i <= endIndex; i++) {
  //     if(i >= arr.length) break;

  //     chunkArr.push(arr[i]);
  //   }

  //   returnArray.push(chunkArr);

  //   [startIndex, endIndex] = [startIndex + len, endIndex + len];
  // }

  // return returnArray;

  // Method 2
  const chunkedArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }

  return chunkedArr;

  // Method 3 (Doesn't work for some reason)
  // const chunkedArr = [];

  // arr.forEach(function(val) {
  //   const last = chunkedArr[chunkedArr.length - 1];

  //   // Check if last and if last length is equal to the chunk len
  //   if (!last || last.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     last.push[val];
  //   }
  // });

  // return chunkedArr;
}

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1,2], [3,4], [5,6], [7]] = [1,2,3,4,5,6,7]

function flattenArray(arrays) {
  // Method 1 (My Solution)
  // return arrays.join().split(",");

  // Method 2
  // return arrays.reduce((a,b) => a.concat(b));

  // Method 3
  // return [].concat.apply([], arrays);

  // Method 4
  return [].concat(...arrays); 
}

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. "elbow" === "below"
// ex. "Dormitory" === "dirty room##"

function isAnagram(str1, str2) {
  let newStr1 = str1.replace(/\W/g, '').toLowerCase();
  let newStr2 = str2.replace(/\W/g, '').toLowerCase();

  newStr1 = newStr1.split("").sort().join("");
  newStr2 = newStr2.split("").sort().join("");

  return newStr1 === newStr2;
}

// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. "hello there" === "Ifmmp UIfsf"

function letterChanges(str) {
  // Method 1 (My Solution)
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // const vowels = "aeiou";
  // let newStr = "";
  
  // str.toLowerCase().split("").forEach(char => {
  //   if(char === " ") {
  //     char = " ";
  //   } else if(char === "z") {
  //     char = "a";
  //   } else {
  //     char = alphabet[alphabet.indexOf(char) + 1];
  //   }

  //   if (vowels.includes(char)) char = char.toUpperCase();

  //   newStr += char;
  // })

  // return newStr;

  // Method 2
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if(char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());

  return newStr;
}

// CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amoount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll() {
  // Method 1 (My Solution)
  let sum = 0;
  for(num in arguments) {
    sum += arguments[num];
  }
  return sum;

  // Method 2
  // var args = Array.prototype.slice.call(arguments);
  // var total = 0;

  // for(i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  // return total;

  // Method 3 - With "...rest" & "forEach"
  // Method 4 - With "...rest" & "reduce"
}

// CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers.
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  // Method 1 (My Solution)
  let primes = [];

  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) primes.push(i);
  }
  
  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
  
    return true;
  }

  return primes.reduce((acc, current) => acc + current);
}

// CHALLENGE 14: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2,3,4,6,6,'hello'], 2,6) == [3,4,'hello']

function seekAndDestroy(arr, ...args) {
  // Method 1 (My Solution)
  return arr.filter(el => !args.includes(el));
}

// CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrenge the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
  // Method 1 (My Solution)
  let treeIndexArr = [];
  let heightArr = [];
  let returnArr = [];
  
  arr.forEach((el, index) => (el === -1) ? treeIndexArr.push(index) : heightArr.push(el));

  heightArr.sort();

  // for(let i = 0; i < arr.length; i++) {
  //   if (treeIndexArr.includes(i)) {
  //     returnArr.push(-1);
  //   } else {
  //     returnArr.push(heightArr.splice(0,1)[0]);
  //   }
  // }

  // return returnArr;

  // Method 2 - Same except the last part (for loop in my solution)
  treeIndexArr.forEach((val, i) => heightArr.splice(treeIndexArr[i], 0, -1));

  return heightArr;
}

// CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined.
// ex.
// missingLetters("abce") = "d"
// missingLetters("abcdefghjklmno") = "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") = "undefined"

function missingLetters(str) {
  // Method 1 (My Solution)
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // const strArr = str.toLowerCase().split("");
  // const [first, last] = [strArr[0], strArr[strArr.length - 1]];
  // let missing = [];

  // alphabet.split("")
  //         .slice(alphabet.indexOf(first), alphabet.indexOf(last) + 1)
  //         .forEach(letter => {
  //           if (!strArr.includes(letter)) missing.push(letter);
  //         })
  
  // return (missing.length === 0) ? undefined : missing;

  // Method 2
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, i) => {
    if(str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  })

  return missing;
}

// CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50,60,60,45,71]) == [170,116]

function evenOddSums(arr) {
  // Method 1 (My Solution)
  let [evenSum, oddSum] = [0, 0];
  arr.forEach(el => el % 2 === 0 ? evenSum += el : oddSum += el);
  return [evenSum, oddSum];
}

// Call Function
const output = evenOddSums([50,60,60,45,71]);

console.log(output);