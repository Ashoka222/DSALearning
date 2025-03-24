// =============== ARRAY PROBLEMS ===============

// Push element in array
let dynamicArray = [1, 2, 3, 4];
dynamicArray.push(5); // Adds element at the end
console.log(dynamicArray); // Output: [1, 2, 3, 4, 5]

let staticArray = new Array(5); // Predefined size
staticArray[0] = 10;
console.log(staticArray); // Output: [10, <4 empty slots>]

// Reverse an array in place
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers
    left++;
    right--;
  }
  return arr;
}

console.log("Reverse array:", reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// Find max & min element in an array
function findMaxMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

console.log("Max and Min:", findMaxMin([5, 2, 8, 1, 9, 3])); // { max: 9, min: 1 }

// Rotate array to the right by k steps
function rotateArray(arr, k) {
  k = k % arr.length; // Handle k > array length

  // Reverse entire array
  reverseArray(arr);

  // Reverse first k elements
  let left = 0;
  let right = k - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  // Reverse remaining elements
  left = k;
  right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}

console.log("Rotated array:", rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log("Merged arrays:", mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// =============== STRING PROBLEMS ===============

// Reverse a string with inbuilt function
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

// Reverse a string without using extra space
function reverseStringInPlace(str) {
  let chars = str.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    let temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  return chars.join("");
}

console.log("Reversed string:", reverseStringInPlace("hello")); // "olleh"

// Check if string is palindrome
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log("Is palindrome:", isPalindrome("racecar")); // true
console.log("Is palindrome:", isPalindrome("hello")); // false

// Find first non-repeating character
function firstNonRepeatingChar(str) {
  let charCount = {};

  // Count frequency of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log("First non-repeating:", firstNonRepeatingChar("leetcode")); // "l"
console.log("First non-repeating:", firstNonRepeatingChar("aabb")); // null

// Replace spaces with %20
function replaceSpaces(str) {
  let result = "";

  for (let char of str) {
    if (char === " ") {
      result += "%20";
    } else {
      result += char;
    }
  }

  return result;
}

console.log("Replaced spaces:", replaceSpaces("Hello World")); // "Hello%20World"
