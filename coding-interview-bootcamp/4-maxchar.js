// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* -------- my solution -------- */
function maxChar(str) {
  const chars = {};
  let maxChar = '';
  let maxValue = 0;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  maxValue = Math.max(...Object.values(chars));
  maxChar = Object.keys(chars).find(key => chars[key] === maxValue);

  return maxChar;
}


/* -------- instructor's solution -------- */
function maxChar(str) {
  const chars = {};
  let maxChar = '';
  let maxValue = 0;

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  for (let char in chars) {
    if (chars[char] > maxChar) {
      maxValue = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}