/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  // 回溯
  let ans = [];
  let map = new Map();
  backtrack(ans, s, wordDict, 0, map, []);
  return ans;

  // 辅助方法
  function backtrack(ans, s, words, index, map, stack) {
    if (map.has(index)) return map.get(index);
    if (index >= s.length) {
      return ans.push(stack.join(' '));
    }
    // 循环
    for (let i = index + 1; i < words.length; i++) {
      if (match(s, index, words[i])) {
        map.set(index, true);
        stack.push(words[i]);
        backtrack(ans, s, words, index + words[i].length, map, stack);
        stack.pop();
      }
    }
  }
  // 辅助方法-比较字符串
  function match(s, i, ss, j = 0) {
    while (j < ss.length) {
      if (s[i++] !== ss[j++]) return false;
    }
    return true;
  }
};
// @lc code=end
