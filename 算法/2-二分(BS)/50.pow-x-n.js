/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 乘法计算
  // 指数形式优化
  if (n === 0 || x === 1) return 1;
  // 使用递归
  // 使用迭代
  // 将其转化为正数n次幂
  return n > 0 ? loop(x, n) : 1 / loop(x, -n);
  return n > 0 ? recur(x, n) : 1 / recur(x, -n);

  // 辅助方法-迭代
  function loop(x, n) {
    let ans = 1;
    let delta = x;
    while (n > 0) {
      if (n % 2 === 1) {
        ans *= delta;
      }
      delta *= delta;
      n = Math.floor(n / 2);
    }
    return ans;
  }
  // 辅助方法-递归
  function recur(x, n) {
    // 完成
    if (n === 0) return 1;
    // 二分法
    // 此处不能用右移
    let ans = recur(x, Math.floor(n / 2));
    // 返回结果
    // 如果n是偶数, ans*ans刚好是结果
    // 如果n是奇数, ans*ans还差1次乘的结果
    return n % 2 === 0 ? ans * ans : ans * ans * x;
  }
};
// @lc code=end
