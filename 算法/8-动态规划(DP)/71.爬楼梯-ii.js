/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * @description 不允许连续跳两个台阶
 * @description 跳完两个台阶后, 只能跳一个台阶
 * @description 因此, 题目变成跳一个台阶+跳三个台阶
 */
var climbStairs = function (n) {
  // 动态规划
  // return dp(n);
  // 深度优先搜索
  return dfs(n);

  // 辅助方法-动态规划-条件限制
  function dp(n) {
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
    inner(n, ans, 1, false);
    inner(n, ans, 2, true);
    return ans[0];

    // 辅助方法
    function inner(n, ans, c, isTwo) {
      if (c > n) return;
      if (c === n) {
        return ans[0]++;
      }
      // 递归
      inner(n, ans, c + 1, false);
      // 如果前一步是2, 此次只能跳一步
      if (!isTwo) inner(n, ans, c + 2, true);
    }
  }
};
// @lc code=end

// 测试代码
// console.log(climbStairs(1), climbStairs(1, true));
// console.log(climbStairs(2), climbStairs(2, true));
// console.log(climbStairs(3), climbStairs(3, true));
// console.log(climbStairs(4), climbStairs(4, true));
// console.log(climbStairs(5), climbStairs(5, true));
// console.log(climbStairs(6), climbStairs(6, true));
// console.log(climbStairs(7), climbStairs(7, true));
// console.log(climbStairs(8), climbStairs(8, true));
// console.log(climbStairs(9), climbStairs(9, true));
