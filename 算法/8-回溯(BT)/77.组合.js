/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  // 回溯法
  let ans = [];
  backtrack(ans, n, k, 0, []);
  return ans;

  // 辅助方法
  function backtrack(ans, n, k, i, stack) {
    // 完成
    if (stack.length === k) {
      return ans.push([...stack]);
    }
    // 递归
    for (let j = i + 1; j <= n; j++) {
      stack.push(j);
      backtrack(ans, n, k, j, stack);
      stack.pop();
    }
  }
};
// @lc code=end
