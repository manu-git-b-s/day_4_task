// Arrow functions

// 2.a Print odd numbers in an array
const printOddNumbers = (arr) => {
  for (let number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
};
printOddNumbers([1, 2, 3, 4, 5]);

// 2.b Convert all the strings to title caps in a string array
const titleCaps = (arr) => {
  let resultArray = [];
  for (let str of arr) {
    let transformedStr = str[0].toUpperCase() + str.slice(1);
    resultArray.push(transformedStr);
  }
  console.log("titleCaps", resultArray);
};
titleCaps(["a", "very", "warm", "welcome", "people"]);

// 2.c Sum of all numbers in an array
const sumOfAllNumbers = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log("sum", sum);
};
sumOfAllNumbers([1, 2, 3, 4]);

// 2.d Return all the prime numbers in an array
const isPrimeNumber = (number) => {
  let isPrime = true;
  for (let fact = 2; fact < number; fact++) {
    if (number % fact === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const returnPrimeNumbers = (arr) => {
  let primeNumbers = [];
  for (let number of arr) {
    if (isPrimeNumber(number)) {
      primeNumbers.push(number);
    }
  }

  console.log("PrimeNumbers", primeNumbers);
};

returnPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2.e Return all palindromes
const isPalindrome = (str) => {
  let normalStr = str;
  let reversedStr = normalStr.split("").reverse().join("");
  if (normalStr === reversedStr) {
    return true;
  } else {
    return false;
  }
};

const returnPalindromes = (arr) => {
  let palindromes = [];
  for (const str of arr) {
    if (isPalindrome(str)) {
      palindromes.push(str);
    }
  }
  console.log("palindromes", palindromes);
};

returnPalindromes(["hello", "madam", "radar", "civic", "google"]);
