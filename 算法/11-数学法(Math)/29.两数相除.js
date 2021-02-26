/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (!dividend) return 0;
  // 简单使用减法求解
  // 如果n1特别大, n2特别小, 很费时间
  let ans = 0;
  let n1 = Math.abs(dividend);
  let n2 = Math.abs(divisor);
  // 优化, 使用divisor的2的指数倍数迭代
  let des = [1];
  let dev = [n2];
  for (let i = 1; i < 20; i++) {
    if (dev[i - 1] > n1) break;
    des.push(des[i - 1] + des[i - 1]);
    dev.push(dev[i - 1] + dev[i - 1]);
  }
  let index = dev.length - 1;
  while (n1 >= n2) {
    if (n1 >= dev[index]) {
      ans += des[index];
      n1 -= dev[index];
    } else {
      index--;
    }
  }
  return (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
    ? ans > 2147483647
      ? 2147483647
      : ans
    : -ans;
};
// @lc code=end
