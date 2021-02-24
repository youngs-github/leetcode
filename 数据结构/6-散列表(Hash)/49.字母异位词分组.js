/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // hash+sort
  let hash = new Map();
  for (let str of strs) {
    let tmp = str.split('').sort().join('');
    if (hash.has(tmp)) {
      hash.get(tmp).push(str);
    } else {
      hash.set(tmp, [str]);
    }
  }
  return [...hash.values()];
};
// @lc code=end
