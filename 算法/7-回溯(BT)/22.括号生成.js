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
  backtrack(ans, n, 0, 0, []);
  return ans;

  // 回溯
  function backtrack(ans, n, left, right, stack) {
    if (left > n || right > n || left < right) return;
    if (left === n && right === n) {
      // 该结束了
      return ans.push(stack.join(''));
    }
    stack.push('(');
    backtrack(ans, n, left + 1, right, stack);
    stack.pop();
    // 右括号
    if (left > 0) {
      stack.push(')');
      backtrack(ans, n, left, right + 1, stack);
      stack.pop();
    }
  }
};
// @lc code=end
