// Anonymous functions

// 1.a Print odd numbers in an array
const printOddNumbers = function (arr) {
  for (let number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
};
printOddNumbers([1, 2, 3, 4, 5]);

// 1.b Convert all the strings to title caps in a string array
const titleCaps = function (arr) {
  let resultArray = [];
  for (let str of arr) {
    let transformedStr = str[0].toUpperCase() + str.slice(1);
    resultArray.push(transformedStr);
  }
  console.log("titleCaps", resultArray);
};
titleCaps(["a", "very", "warm", "welcome", "people"]);

// 1.c Sum of all numbers in an array
const sumOfAllNumbers = function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log("sum", sum);
};
sumOfAllNumbers([1, 2, 3, 4]);

// 1.d Return all the prime numbers in an array
const isPrimeNumber = function (number) {
  let isPrime = true;
  for (let fact = 2; fact < number; fact++) {
    if (number % fact === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const returnPrimeNumbers = function (arr) {
  let primeNumbers = [];
  for (let number of arr) {
    if (isPrimeNumber(number)) {
      primeNumbers.push(number);
    }
  }

  console.log("PrimeNumbers", primeNumbers);
};

returnPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 1.e Return all palindromes
const isPalindrome = function (str) {
  let normalStr = str;
  let reversedStr = normalStr.split("").reverse().join("");
  if (normalStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const returnPalindromes = function (arr) {
  let palindromes = [];
  for (const str of arr) {
    if (isPalindrome(str)) {
      palindromes.push(str);
    }
  }
  console.log("Palindromes", palindromes);
};

returnPalindromes(["hello", "madam", "radar", "civic", "google"]);

// 1.f Return median of two sorted arrays of the same size
const returnMedian = function (arr1, arr2) {
  var mergedArray = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  var median;
  if (mergedArray.length % 2 === 0) {
    median = (mergedArray[mergedArray.length / 2 - 1] + mergedArray[mergedArray.length / 2]) / 2;
  } else {
    median = mergedArray[Math.floor(mergedArray.length / 2)];
  }
  console.log("Median", median);
};
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
returnMedian(arr1, arr2);

// 1.g Remove duplicates from an array
const removeDuplicates = function (arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log("Remove duplicates", uniqueArray);
};
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// 1.h Rotate an array by k times
const rotateArray = function (arr, numberOfRotaions) {
  for (let i = 0; i < numberOfRotaions; i++) {
    arr.unshift(arr.pop());
  }
  console.log("Rotate", arr);
};
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
