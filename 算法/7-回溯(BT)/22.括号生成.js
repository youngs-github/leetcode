/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let ans = [];
  backtrack(ans, n, 0, 0, '');
  return ans;

  // 回溯
  function backtrack(ans, n, left, right, stack) {
    if (left === n && right === n) {
      // 该结束了
      return ans.push(stack);
    }
    if (left < n) {
      backtrack(ans, n, left + 1, right, stack + '(');
    }
    // 右括号
    if (left <= n && left > right) {
      backtrack(ans, n, left, right + 1, stack + ')');
    }
  }
};
// @lc code=end
