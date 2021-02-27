/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  return cp(m, n);
  return dp(m, n);

  // 辅助方法-组合
  function cp(m, n) {
    // 共需移动m-1 + n-1次, 其中横向n-1次, 纵向m-1次
    // 排列组合C(m-1)(m+n-2)或者C(n-1)(m+n-2)
    // 即：(n-1)...(m+n-2) / (m-1)!
    let ans = 1;
    for (let i = n, j = 1; j < m; i++, j++) {
      ans = ((ans * i) / j) >> 0;
    }
    return ans;
  }
  // 辅助方法-动态规划
  function dp(m, n) {
    // 状态方程：f(i,j)=f(i-1,j) + f(i, j-1)
    // let ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // ans[0][0] = 1;
    // 空间优化
    // 没太看得懂
    let ans = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        // ans[i][j] += (ans[i - 1] ? ans[i - 1][j] : 0) + (ans[i][j - 1] || 0);
        ans[j] += ans[j - 1];
      }
    }
    return ans[n - 1];
    // return ans[m - 1][n - 1];
  }
  // 辅助方法-递归-超时
  function recur(m, n) {
    let ans = [1];
    inner(m, n, 1, 1, ans);
    return ans[0];

    // 辅助方法
    function inner(m, n, i, j, ans) {
      if (i === m && j === n) {
        return;
      }
      if (i === m) {
        return recur(m, n, i, j + 1, ans);
      }
      if (j === n) {
        return recur(m, n, i + 1, j, ans);
      }
      // 有两条路
      ans[0]++;
      recur(m, n, i, j + 1, ans);
      recur(m, n, i + 1, j, ans);
    }
  }
};
// @lc code=end
