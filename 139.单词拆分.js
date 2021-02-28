/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 动态规划
  return dp(s, wordDict);

  // 辅助方法-dp
  function dp(s, words) {
    // 状态方程：f(i) = f(j) && check(j...i-1)
    // 状态数组
    // 空字符符合
    let dps = new Array(s.length + 1).fill(false);
    dps[0] = true;
    // 快速查找
    let set = new Set(words);
    // 外层遍历
    // 逐个判断所有子串是否满足
    for (let i = 1; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dps[j] && set.has(s.slice(j, i))) {
          dps[i] = true;
          break;
        }
      }
    }
    return dps[s.length];
  }
};
// @lc code=end
