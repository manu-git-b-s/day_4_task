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

// 1.f Return median of two sorted arrays of the same size.
(function (arr1, arr2) {
  let mergedArray = arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
  let median;
  if (mergedArray.length % 2 === 0) {
    median = (mergedArray[mergedArray.length / 2 - 1] + mergedArray[mergedArray.length / 2]) / 2;
  } else {
    median = mergedArray[Math.floor(mergedArray.length / 2)];
  }
  console.log("Median", median);
})([1, 3, 5, 7], [2, 4, 6, 8]);

// 1.g Remove duplicates from an array
(function (arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  console.log("UniqueArray", uniqueArray);
})([1, 2, 2, 3, 4, 4, 5]);

// 1.h Rotate an array by k times.
(function (arr, numberOfRotaions) {
  for (let i = 0; i < numberOfRotaions; i++) {
    arr.unshift(arr.pop());
  }
  console.log("Rotate", arr);
})([1, 2, 3, 4, 5, 6, 7], 3);
