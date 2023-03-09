//-----------------------------------------------------------------
//1. Write a function `sum` that computes the sum of the numbers in an array.
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
document.getElementById("demo1").innerHTML = sum([1, 3, 6]);
// sum([1, 3, 6]);

//--------------------------------------------------------------
// 2. Write a function `max` that accepts an array of numbers and returns the
//   *largest* number in the array.
const arr = [1, 5, 10, 15];
console.log(Math.max(...arr));
// max([1, 5, 10, 15]);

//--------------------------------------------------------------
// 3. Try the following at a console:

//   ```js
//   "the quick brown fox jumped over the lazy dog".split(" ");
//   "Hello, world!".split("")
//   "1,2,3,4,5,6".split(",")
//   ```

//   What is returned by `split` (You can read more about it
//   [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)),
//   and how does it work?

//   Use `split` to write a function `longestWord` that takes a string as an
//   argument and returns the longest word.

function findLongestWord(str) {
  var strSplit = str.split("");
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

document.getElementById("demo3").innerHTML =
  findLongestWord("This is my string");

// longestWord('This is my string')

//--------------------------------------------------------------
// 4. Write a function `remove` that accepts an *array* and an *element*, and
//   returns an array with all ocurrences of *element* removed.

//   ```js
//   function remove(array, element) {
//     // your code here
//   }
//   remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
//   ```
function remove(array, element) {
  var index = array.indexOf(element);
  array.splice(index, 1);

  if (array.indexOf(element) > -1) {
    return remove(array, element);
  }

  return array;
}
document.getElementById("demo4").innerHTML = remove([1, 3, 6, 2, 3], 3);
// remove([1, 2, 3, 3, 4, 5], 3);

//--------------------------------------------------------------

// 5. Write a function `evens` that accepts an array as an argument, and returns
//   an array consisting of all of the *even* numbers in that array.

// evens([1, 2, 3, 4, 5, 6, 7, 8]);
var inputs = [1, 2, 3, 4, 5, 6, 7, 8];
var result = inputs.filter((x) => x % 2 == 0);
console.log(result);
