/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input: ["flower","flow","flight"]
Output: "fl"
*/

function longestCommonPrefix(str) {
  let common = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i].includes(str[i + 1])) {
      //TODO: STUCK HERE
      return true
    } else {
      return common = '';
    }
  }
}

longestCommonPrefix(["flower", "flow", "flight"])