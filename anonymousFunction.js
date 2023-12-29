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

// 1.f Return median of two sorted arrays of the same size.
const median = function (arr1, arr2) {
  let mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(mergedArray);
};

median([23, 6, 89], [90, 55, 2]);

// 1.h Rotate an array by k times
const rotateArray = function (arr, numberOfRotaions) {
  for (let i = 0; i < numberOfRotaions; i++) {
    arr.unshift(arr.pop());
  }
  console.log("Rotate", arr);
};
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
