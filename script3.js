/*
function arrayValuesTypes(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = typeof arr[i];
    // console.log(typeof arr[i]);
  }
  return newArr;
}
console.log(arrayValuesTypes([1, 10])); //, ['number', 'number']);
console.log(arrayValuesTypes([["hello", 1], 10])); //, ['object', 'number']);
console.log(arrayValuesTypes(["shashwat", 10, 90])); //, ['string', 'number', 'number']);
console.log(arrayValuesTypes([[], true])); //, ['object', 'boolean']);
console.log(arrayValuesTypes([false, false, "true"])); //, ['boolean', 'boolean', "string"]);
console.log(arrayValuesTypes([1, 10])); //, ['number', 'number']);
console.log(arrayValuesTypes([undefined, null])); //, ['undefined', 'object']);
console.log(
  arrayValuesTypes([
    function () {
      let x = 10;
    },
    10,
  ])
); //, ['function', 'number']);


// sorting 

function sortWord(word) {
  return word.split("").sort().join("");
}
console.log(sortWord("dcba")); //, "abcd")
console.log(sortWord("pneumonoultramicroscopicsilicovolcanoconiosis")); //, "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv")
console.log(sortWord("Unpredictable")); //, "Uabcdeeilnprt", "Capital letters should come first!")
console.log(sortWord("a")); //, "a")
console.log(sortWord("ability")); //, "abiilty")
console.log(sortWord("able")); //, "abel")
console.log(sortWord("about")); //, "abotu")
console.log(sortWord("above")); //, "abeov")
console.log(sortWord("accept")); //, "accept")


// largest no in array

function findLargestNum(arr) {
  return Math.max(...arr);
}
console.log(findLargestNum([4, 5, 1, 3])); //, 5)
console.log(findLargestNum([13, 27, 18, 26])); //, 27)
console.log(findLargestNum([32, 35, 37, 39])); //, 39)
console.log(findLargestNum([1000, 1001, 857, 1])); //, 1001)
console.log(findLargestNum([27364, 837363, 736736, 73635])); //, 837363)
console.log(findLargestNum([30, 2, 40, 3])); //, 40)
console.log(findLargestNum([0, 1, 0, 0, 1])); //, 1)

// smallest number
function findSmallestNum(arr) {
  return Math.min(...arr);
}
console.log(findSmallestNum([34, 15, 88, 2])); //, 2);
console.log(findSmallestNum([34, -345, -1, 100])); //, -345);
console.log(findSmallestNum([-76, 1.345, 1, 0])); //, -76);
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])); //, -0.9999);
console.log(findSmallestNum([7, 7, 7])); //, 7);
console.log(findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1])); //, 1);
console.log(findSmallestNum([-4, -6, -8, -1])); //, -8);
console.log(findSmallestNum([54, 76, 23, 54])); //, 23);
console.log(findSmallestNum([100])); //, 100);
console.log(findSmallestNum([0, 1, 2, 3, 4, 5])); //, 0);


// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
  return str.split("").sort().join("");
}
console.log(AlphabetSoup("hello")); //, "ehllo");
console.log(AlphabetSoup("edabit")); //, "abdeit");
console.log(AlphabetSoup("hacker")); //, "acehkr");
console.log(AlphabetSoup("geek")); //, "eegk");
console.log(AlphabetSoup("javascript")); //, "aacijprstv");
console.log(AlphabetSoup("credibility")); //, "bcdeiiilrty");
console.log(AlphabetSoup("apostrophe")); //, "aehoopprst");
console.log(AlphabetSoup("determination")); //, "adeeiimnnortt");
console.log(AlphabetSoup("win")); //, "inw");
console.log(AlphabetSoup("synthesis")); //, "ehinsssty");


// Reverse the Order of a String
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Think different.")); //, ".tnereffid knihT");
console.log(
  reverse(
    "It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."
  )
); //, ".od ot tahw su llet nac yeht os elpoep trams erih ew ;od ot tahw meht llet dna elpoep trams erih ot esnes ekam t’nseod tI");
console.log(
  reverse(
    "Innovation is the ability to see change as an opportunity - not a threat"
  )
); //, "taerht a ton - ytinutroppo na sa egnahc ees ot ytiliba eht si noitavonnI");
console.log(
  reverse(
    "Everything is based on a simple rule: Quality is the best business plan."
  )
); //, ".nalp ssenisub tseb eht si ytilauQ :elur elpmis a no desab si gnihtyrevE");
console.log(
  reverse(
    "The people who are crazy enough to think they can change the world are the ones who do."
  )
); //, ".od ohw seno eht era dlrow eht egnahc nac yeht kniht ot hguone yzarc era ohw elpoep ehT");
console.log(
  reverse(
    "Don’t let the noise of others’ opinions drown out your own inner voice."
  )
); //, ".eciov renni nwo ruoy tuo nword snoinipo ’srehto fo esion eht tel t’noD");
console.log(
  reverse("Learn continually; There's always one more thing to learn.")
); //, ".nrael ot gniht erom eno syawla s'erehT ;yllaunitnoc nraeL");
console.log(
  reverse(
    "Quality is more important than quantity. One home run is much better than two doubles."
  )
); //, ".selbuod owt naht retteb hcum si nur emoh enO .ytitnauq naht tnatropmi erom si ytilauQ");
console.log(
  reverse("Your time is limited so don't waste it living someone else's life.")
); //, ".efil s'esle enoemos gnivil ti etsaw t'nod os detimil si emit ruoY");
console.log(
  reverse(
    "The only way to be truly satisfied is to do what you believe is great work."
  )
); //, ".krow taerg si eveileb uoy tahw od ot si deifsitas ylurt eb ot yaw ylno ehT");


//  sort words

function nameShuffle(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(nameShuffle("Donald Trump")); //,"Trump Donald");
console.log(nameShuffle("Rosie O'Donnel")); //,"O'Donnel Rosie");
console.log(nameShuffle("Seymour Butts")); //,"Butts Seymour");
console.log(nameShuffle("Ebony Greene")); //,"Greene Ebony");
console.log(nameShuffle("Ken Kennedy")); //,"Kennedy Ken");
console.log(nameShuffle("Allison Gonzalez")); //,"Gonzalez Allison");
console.log(nameShuffle("Albert Frazier")); //,"Frazier Albert");
console.log(nameShuffle("Eloise Hopkins")); //,"Hopkins Eloise");
console.log(nameShuffle("Donnie Welch")); //,"Welch Donnie");
console.log(nameShuffle("Vernon Thomas")); //,"Thomas Vernon");


// Nth Smallest Integer

function nthSmallest(arr, n) {
  return arr
    .sort((a, b) => a - b)
    .slice(n - 1)
    .shift();

  // console.log(arr, n);
}
console.log(nthSmallest([1, 3, 5, 7], 1)); //, 1);
console.log(nthSmallest([1, 3, 5, 7], 3)); //, 5);
console.log(nthSmallest([1, 3, 5, 7], 5)); //, null);
console.log(nthSmallest([7, 3, 5, 1], 2)); //, 3);
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 1)); //, -3);
console.log(nthSmallest([5, 4, 3, 2, 1, -3], 5)); //, 4);
console.log(nthSmallest([4, 5], 3)); //, null);
console.log(nthSmallest([4, 5], 2)); //, 5);
console.log(nthSmallest([4, 5], 1)); //, 4);


// Return Only the Integer
function returnOnlyInteger(arr) {
  return arr.filter((el) => Number.isInteger(el));
}
console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])); //, [9, 2, 16])
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])); //, [81, 123])
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])); //, [10, 56, 20, 3])
console.log(returnOnlyInteger(["String", true, 3.3, 1])); //, [1])


// Lexicographically First and Last

function firstAndLast(s) {
  const first = s.split("").sort().join("");
  const second = first.split("").reverse().join("");
  let arr = [];
  arr.push(first, second);
  return arr;
}
console.log(firstAndLast("marmite")); //, ["aeimmrt", "trmmiea"])
console.log(firstAndLast("bench")); //, ["bcehn", "nhecb"])
console.log(firstAndLast("scoop")); //, ["coops", "spooc"])
console.log(firstAndLast("fanatic")); //, ["aacfint", "tnifcaa"])


// sort using number of alphabets in a word

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"])); //, ["a", "bb", "ccc", "dddd"])
console.log(sortByLength(["apple", "pie", "shortcake"])); //, ["pie", "apple", "shortcake"])
console.log(sortByLength(["may", "april", "september", "august"])); //, ["may", "april", "august", "september"])
console.log(sortByLength(["maybe"])); //, ["maybe"])
console.log(sortByLength([])); //, [])

// array = ["henry", "hu", "im", "ashgdadad", "a"];
// console.log(
//   array.sort(function (a, b) {
//     return a.length - b.length;
//   })
// );


//////////////////// LOOPS /////////////////////////

function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}
console.log(calculateExponent(5, 5)); //, 3125)
console.log(calculateExponent(3, 3)); //, 27)
console.log(calculateExponent(10, 10)); //, 10000000000)
console.log(calculateExponent(5, 3)); //, 125)


//
function search(arr, item) {
  return arr.indexOf(item);
}
console.log(search([1, 5, 3], 5)); //, 1);
console.log(search([9, 8, 3], 3)); //, 2);
console.log(search([1, 2, 3], 4)); //, -1);
console.log(search([1, 5, 3, 10, 17, 20, -6], 20)); //, 5);

// Integer Digits Count
function count(n) {
  return Math.abs(n).toString().split("").length;
}
console.log(count(318));
3;
console.log(count(4666));
4;
console.log(count(-314890));
6;
console.log(count(-123456789));


// facorilaze a number

function paths(n) {
  let result = n;
  while (n > 1) {
    n--;
    result *= n;
  }
  return result;
}
console.log(paths(1)); //, 1)
console.log(paths(2)); //, 2)
console.log(paths(3)); //, 6)
console.log(paths(4)); //, 24)
console.log(paths(5)); //, 120)
console.log(paths(6)); //, 720)
console.log(paths(7)); //, 5040)
console.log(paths(8)); //, 40320)

//

function isObject(value) {
  return typeof value === "object" && value !== null ? true : false;
}
console.log(isObject(new Date())); //, true)
console.log(isObject("12/12/2011")); //, false)
console.log(isObject(null)); //, false)
console.log(isObject([1, 2, 3])); //, true)
console.log(isObject({})); //, true)

function mean(num) {
  const realNumberToArray = num.toString().split("").map(Number);
  const numLength = num.toString().split("").length;
  const total = realNumberToArray.reduce((acc, n) => acc + n, 0);
  return total / numLength;
}
console.log(mean(666)); //, 6)
console.log(mean(80)); //, 4)
console.log(mean(789)); //, 8)
console.log(mean(417)); //, 4)
console.log(mean(1357)); //, 4)
console.log(mean(42)); //, 3)
console.log(mean(12345)); //, 3)

function reverseAndNot(i) {
  const a = i.toString().split("").reverse().join("").split(" ").map(Number);
  return Number([...a, i].join(""));
}
console.log(reverseAndNot(123)); //, 321123)
console.log(reverseAndNot(496)); //, 694496)
console.log(reverseAndNot(307)); //, 703307)
console.log(reverseAndNot(500)); //, 5500)
console.log(reverseAndNot(321)); //, 123321)
console.log(reverseAndNot(564)); //, 465564)
console.log(reverseAndNot(66)); //, 6666)
console.log(reverseAndNot(553)); //, 355553)
console.log(reverseAndNot(518)); //, 815518)
console.log(reverseAndNot(152)); //, 251152)
console.log(reverseAndNot(273)); //, 372273)
console.log(reverseAndNot(603)); //, 306603)
console.log(reverseAndNot(864)); //, 468864)

// Square Every Digit
function squareDigits(n) {
  const sqared = n
    .toString()
    .split("")
    .map(Number)
    .map((a) => a * a)
    .join("");
  return Number(sqared);
}
console.log(squareDigits(9119)); //, 811181)
console.log(squareDigits(8726)); //, 6449436)
console.log(squareDigits(9763)); //, 8149369)
console.log(squareDigits(2230)); //, 4490)
console.log(squareDigits(2797)); //, 4498149)
console.log(squareDigits(233)); //, 499)
console.log(squareDigits(7437)); //, 4916949)
console.log(squareDigits(2483)); //, 416649)
console.log(squareDigits(5742)); //, 2549164)
console.log(squareDigits(5636)); //, 2536936)
console.log(squareDigits(841)); //, 64161)

//
function mergeSort(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeSort([1, 2, 3], [5, 4, 6])); //, [1, 2, 3, 4, 5, 6]);
console.log(mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]));
//   ,
//   [8, 6, 4, 2, 0, -2, -4, -6]
// );
console.log(mergeSort([120, 180, 200], [190, 175, 130])),
  //   [120, 130, 175, 180, 190, 200]
  // );
  console.log(mergeSort([25, 21, 17, 13], [])); //, [25, 21, 17, 13]);
console.log(mergeSort([1024, 2048], [512, 128, 64]));
//,
//   [64, 128, 512, 1024, 2048]
// );
console.log(mergeSort([0, 1], [1, 1, 1, 1, 0, 0, 0, 0])); //
// ,
//   [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
// );
console.log(mergeSort([-1, -3], [11, -5, 7, -11]));
//   ,
//   [11, 7, -1, -3, -5, -11]
// );
console.log(mergeSort([10, 20, 30, 40, 50, 60, 80, 90], [70]));
//   ,
//   [10, 20, 30, 40, 50, 60, 70, 80, 90]
// );


//
function faceInterval(num) {
  const difference = num[num.length - 1] - num[0];
  return num.includes(difference) ? ":)" : ":(";
}
console.log(faceInterval([1, 2, 5, 8, 3, 9])); //, ":)")
console.log(faceInterval([5, 2, 8, 3, 11])); //, ":(")
console.log(faceInterval([20, 50, 13, 60, 22, 72, 99])); //, ":(")
console.log(faceInterval([11, 42, 83, 28, 47, 94])); //, ":)")
*/
