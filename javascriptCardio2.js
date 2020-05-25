// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(str) {
  const newStr = str.split(' ');
  let maxLen = newStr[0].length;
  let maxArr = [newStr[0]];

  for (let i = 0; i < newStr.length - 1; i++) {
    if (maxLen < newStr[i + 1].length) {
      maxLen = newStr[i + 1].length;
      maxArr = [];
      maxArr.push(newStr[i + 1]);
    } else if (maxLen === newStr[i + 1].length) {
      maxArr.push(newStr[i + 1]);
    }
  }
  if (maxArr.length === 1) {
    return maxArr[0];
  } else return maxArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  let newArr = [];
  let tinyArr = [];
  for (let i = 0; i < arr.length; i++) {
    tinyArr.push(arr[i]);
    if ((i + 1) % len === 0) {
      newArr.push(tinyArr);
      tinyArr = [];
    } else if ((i + 1) % len !== 0 && i === arr.length - 1) {
      newArr.push(tinyArr);
    }
  }
  return newArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays, newArr = []) {
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      flattenArray(arrays[i], newArr);
    } else {
      newArr.push(arrays[i]);
    }
  }
  return newArr;
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

//letters = /^[A-Za-z]+$/;

function isAnagram(str1, str2) {
  const newStr1 = {};
  const newStr2 = {};
  let big;
  let small;
  if (str1.split('').length >= str2.split('').length) {
    big = str1;
    small = str2;
  } else {
    big = str2;
    small = str1;
  }

  big.split('').map((item, i) => {
    if (!newStr1[item]) {
      newStr1[item] = 1;
    } else {
      newStr1[item]++;
    }

    if (i < small.length && !newStr2[small[i]]) {
      newStr2[small[i]] = 1;
    } else if (i < small.length && newStr2[small[i]]) {
      newStr2[small[i]]++;
    }
  });

  console.log('newStr1', newStr1);
  console.log('newStr2', newStr2);
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
console.log('###########  longestWord  ########## \n');
const longestWordOut = longestWord('Hello my name is Jason');
console.log('longestWord', longestWordOut);
console.log('\n');
console.log('###########  chunkArray  ########## \n');
const chunkArrayOut = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log('chunkArray', chunkArrayOut);
console.log('\n');
console.log('###########  flattenArray  ########## \n');
const flattenArrayOut = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log('flattenArray', flattenArrayOut);
console.log('\n');
console.log('###########  isAnagram  ########## \n');
// const isAnagramOut =
isAnagram('elbowwee', 'beloww ! ##  w');
// console.log('isAnagram', isAnagramOut);
console.log('\n');
