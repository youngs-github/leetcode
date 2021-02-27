/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 动态规划
  // return dp(n);
  return dp2(n);
  // 深度优先搜索
  // return dfs(n);
  // 数学方法
  // return math(n);

  // 辅助方法-动态规划
  function dp(n) {
    // 状态方程：f(i) = f(i-1) + f(i-2)
    // 只需要两个变量, 所以不需要状态数组
    let p1 = 0;
    let p2 = 0;
    let p3 = 1;
    for (let i = 1; i <= n; i++) {
      p1 = p2;
      p2 = p3;
      p3 = p1 + p2;
    }
    return p3;
  }
  // 辅助方法-动态规划-条件限制
  function dp2(n) {
    // 不允许连续跳两个台阶
    // 跳完两个台阶后, 只能跳一个台阶
    // 因此, 题目变成跳一个台阶+跳三个台阶
    // 如果使用递归不溢出也还蛮简单, 当前跳了2步后只能跳一步
    // 状态方程：f(i) = f(i-1) + f(i-3)
    let dps = new Array(n + 1);
    dps[0] = 1;
    dps[1] = 1;
    dps[2] = 2;
    for (let i = 3; i <= n; i++) {
      dps[i] = dps[i - 1] + dps[i - 3];
    }
    return dps[n];
  }
  // 辅助方法-dfs-超时
  function dfs(n) {
    // 可以用来求完整路径
    let ans = [0];
    inner(n, ans, 1);
    inner(n, ans, 2);
    return ans[0];

    // 辅助方法
    function inner(n, ans, c) {
      if (c > n) return;
      if (c === n) {
        return ans[0]++;
      }
      // 递归
      inner(n, ans, c + 1);
      inner(n, ans, c + 2);
    }
  }
  // 辅助方法-math
  function math(n) {
    const sqrt5 = Math.sqrt(5);
    const fibn =
      Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);
    return Math.round(fibn / sqrt5);
  }
};
// @lc code=end
