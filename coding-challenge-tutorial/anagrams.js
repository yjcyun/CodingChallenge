// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True

function anagrams(strA, strB) {
  // create char map
  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(aCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

// helper function for char map
function buildCharMap(str) {
  // create an empty object
  const charMap = {};
  // for every char in str, replace any non-char with empty '' 
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    //if charMap[char] exsists, add 1 or create 1
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}


// Solution 2
function anagrams(strA, strB){
  return cleanStr(strA) === cleanStr(strB)
}

function cleanStr (str) {
  return str.replace(/[^\w]g/, '').toLowerCase().split('').sort().join('')
}