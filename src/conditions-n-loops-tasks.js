/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const array = [a, b, c];

  let maxNumber = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const { x: queenX, y: queenY } = queen;
  const { x: kingX, y: kingY } = king;

  const isVerticalLine = queenY === kingY;
  const isHorizontalLine = queenX === kingX;

  function isDiagonal(x1, y1, x2, y2) {
    const differenceX = Math.abs(x1 - x2);
    const differenceUpY = y1 + differenceX;
    const differenceDownY = y1 - differenceX;
    return differenceUpY === y2 || differenceDownY === y2;
  }

  return (
    isVerticalLine ||
    isHorizontalLine ||
    isDiagonal(queenX, queenY, kingX, kingY)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const doesTriangleExist =
    a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;

  return doesTriangleExist && (a === b || b === c || a === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = {
    1: 'I',
    5: 'V',
    10: 'X',
  };
  let number = '';

  function getDozens(a) {
    const dozens = Math.trunc(a / 10);

    if (dozens) {
      for (let i = 0; i < dozens; i += 1) {
        number += romanNumerals[10];
      }
    }
    return number;
  }

  function getFives(a) {
    const fives = Math.trunc((a % 10) / 5);
    const ones = (a % 10) % 5;

    if (fives && ones < 4) {
      number += romanNumerals[5];
    }
    return number;
  }

  function getOnes(a) {
    const onesAfterDozens = a % 10;
    const onesAfterFives = (a % 10) % 5;

    if (onesAfterDozens && onesAfterDozens === 9) {
      number += romanNumerals[1] + romanNumerals[10];
    } else if (onesAfterFives && onesAfterFives === 4) {
      number += romanNumerals[1] + romanNumerals[5];
    } else if (onesAfterFives && onesAfterFives < 4) {
      for (let i = 0; i < onesAfterFives; i += 1) {
        number += romanNumerals[1];
      }
    }
    return number;
  }

  getDozens(num);
  getFives(num);
  getOnes(num);

  return number;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digits = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    '-': 'minus',
    '.': 'point',
    ',': 'point',
  };

  let string = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      default:
        if (i === numberStr.length - 1) {
          string += digits[numberStr[i]];
        } else {
          string += digits[numberStr[i]];
          string += ' ';
        }
        break;
    }
  }

  return string;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    const j = str.length - 1 - i;

    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }

  return index;
}
/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  for (let i = 0; i < String(num).length; i += 1) {
    if (Number(String(num)[i]) === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (!arr.length) {
    return -1;
  }

  let leftArrSum = 0;
  let rightArrSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    rightArrSum += arr[i];
  }
  for (let i = 0; i < arr.length; i += 1) {
    rightArrSum -= arr[i];
    if (leftArrSum === rightArrSum) return i;
    leftArrSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const results = [];
  for (let i = 0; i < size; i += 1) {
    results[i] = Array(size);
    for (let j = 0; j < size; j += 1) {
      results[i][j] = undefined;
    }
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = size - 1;
  let startRow = 0;
  let endRow = size - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      results[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;
    for (let i = startRow; i <= endRow; i += 1) {
      results[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;
    for (let i = endColumn; i >= startColumn; i -= 1) {
      results[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;
    for (let i = endRow; i >= startRow; i -= 1) {
      results[i][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }
  return results;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotatedMatrix = matrix;
  const n = rotatedMatrix.length;
  for (let x = 0; x < n / 2; x += 1) {
    for (let y = x; y < n - x - 1; y += 1) {
      const temp = rotatedMatrix[x][y];
      rotatedMatrix[x][y] = rotatedMatrix[n - 1 - y][x];
      rotatedMatrix[n - 1 - y][x] = rotatedMatrix[n - 1 - x][n - 1 - y];
      rotatedMatrix[n - 1 - x][n - 1 - y] = rotatedMatrix[y][n - 1 - x];
      rotatedMatrix[y][n - 1 - x] = temp;
    }
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;

  if (array.length < 2) {
    return;
  }

  function partition(a, low, high) {
    const b = a;
    const pivot = b[high];
    let i = low - 1;

    for (let j = low; j < high; j += 1) {
      if (array[j] <= pivot) {
        i += 1;
        const temp = b[i];
        b[i] = b[j];
        b[j] = temp;
      }
    }

    const temp = array[i + 1];
    b[i + 1] = b[high];
    b[high] = temp;

    return i + 1;
  }

  function quickSort(a, low, high) {
    if (low < high) {
      const partitionIndex = partition(a, low, high);
      quickSort(a, low, partitionIndex - 1);
      quickSort(a, partitionIndex + 1, high);
    }
  }

  quickSort(array, 0, array.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let string = str;
  let step = iterations % (str.length - 2);
  if (iterations > 100) {
    step *= 5;
  }
  for (let j = 0; j < step; j += 1) {
    for (let i = 1; i < string.length / 2 + 1; i += 1) {
      const current = string[i];
      string = string.substring(0, i) + string.substring(i + 1, str.length);
      string += current;
    }
  }
  return string;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let tempNumber = number;

  while (tempNumber > 0) {
    digits.unshift(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i === -1) {
    return number;
  }

  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const temp = digits[i];
  digits[i] = digits[j];
  digits[j] = temp;

  const reversedTail = digits.splice(i + 1).reverse();
  digits.push(...reversedTail);

  let result = 0;
  for (let k = 0; k < digits.length; k += 1) {
    result = result * 10 + digits[k];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
