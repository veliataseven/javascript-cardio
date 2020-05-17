// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  let newStr = '';
  for (let index = str.length - 1; index >= 0; index--) {
    newStr += str[index];
  }
  return newStr;
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const str = int.toString();
  const newStr = reverseString(str);
  const newInt = parseInt(newStr);
  return newInt * Math.sign(int);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const newStr = str.split(' ');
  let newText = '';
  for (let i = 0; i < newStr.length; i++) {
    newText += newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1) + ' ';
  }
  return newText;
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let maxNum = 0;
  let maxChar = '';
  const charCount = {};
  str.split('').forEach((char) => {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  });

  for (let key in charCount) {
    if (charCount[key] > maxNum) {
      maxNum = charCount[key];
      maxChar = key;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 0; i < 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// Call Function
console.log('###########  reverseString  ########## \n');
const reverseStringOut = reverseString('Ali');
console.log('reverseString', reverseStringOut);
console.log('\n');
console.log('###########  isPalindrome  ########## \n');
const isPalindromeOut = isPalindrome('racecar');
console.log('isPalindrome', isPalindromeOut);
console.log('\n');
console.log('###########  reverseInt  ########## \n');
const reverseIntOut = reverseInt(-1254);
console.log('reverseIntOut', reverseIntOut);
console.log('\n');
console.log('###########  capitalizeLetters  ########## \n');
const capitalizeLettersOut = capitalizeLetters('i love javascript');
console.log('capitalizeLettersOut', capitalizeLettersOut);
console.log('\n');
console.log('###########  maxCharacter  ########## \n');
const maxCharacterOut = maxCharacter('javascript');
console.log('maxCharacterOut', maxCharacterOut);
console.log('\n');
console.log('###########  fizzBuzz  ########## \n');
fizzBuzz();
