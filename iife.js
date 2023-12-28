// IIFE functions

// 1.a Print odd numbers in an array
(function (arr) {
  for (let number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
})([1, 2, 3, 4, 5]);

// 1.b Convert all the strings to title caps in a string array
(function (arr) {
  let resultArray = [];
  for (let str of arr) {
    let transformedStr = str[0].toUpperCase() + str.slice(1);
    resultArray.push(transformedStr);
  }
  console.log("titleCaps", resultArray);
})(["a", "very", "warm", "welcome", "people"]);

// 1.c Sum of all numbers in an array
(function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log("sum", sum);
})([1, 2, 3, 4]);

// 1.d Return all the prime numbers in an array
(function (arr) {
  let primeNumbers = [];
  for (let number of arr) {
    let isPrime = true;
    for (let fact = 2; fact < number; fact++) {
      if (number % fact === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(number);
    }
  }

  console.log("primeNumbers", primeNumbers);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 1.e Return all palindromes
(function (arr) {
  let palindromes = [];
  for (const str of arr) {
    let isPalindrome = false;
    let normalStr = str;
    let reversedStr = normalStr.split("").reverse().join("");
    if (normalStr === reversedStr) {
      isPalindrome = true;
    }
    if (isPalindrome) {
      palindromes.push(str);
    }
  }
  console.log("palindromes", palindromes);
})(["hello", "madam", "radar", "civic", "google"]);
