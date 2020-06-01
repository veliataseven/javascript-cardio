// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {
  return numbers.reduce((total, item) => total + item);
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
  let total = 0;

  function isPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  return total;
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split('').map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach((num) => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  return [evenSum, oddSum];
}

// Call Function
console.log('###########  addAll  ########## \n');
const addAllOut = addAll(1, 2, 3, 4, 5, 6);
console.log('addAll:', addAllOut);
console.log('\n');
console.log('###########  sumAllPrimes  ########## \n');
const sumAllPrimesOut = sumAllPrimes(13);
console.log('sumAllPrimes:', sumAllPrimesOut);
console.log('\n');
console.log('###########  seekAndDestroy  ########## \n');
const seekAndDestroyOut = seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6);
console.log('seekAndDestroy:', seekAndDestroyOut);
console.log('\n');
console.log('###########  sortByHeight  ########## \n');
const sortByHeightOut = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
console.log('sortByHeight:', sortByHeightOut);
console.log('\n');
console.log('###########  missingLetters  ########## \n');
const missingLettersOut = missingLetters('abcdefghjklmno');
console.log('missingLetters:', missingLettersOut);
console.log('\n');
console.log('###########  evenOddSums  ########## \n');
const evenOddSumsOut = evenOddSums([50, 60, 60, 45, 71]);
console.log('evenOddSums:', evenOddSumsOut);
console.log('\n');
