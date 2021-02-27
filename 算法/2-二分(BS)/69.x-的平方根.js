/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (!x) return 0;
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let pow = mid * mid;
    if (pow < x) {
      left = mid + 1;
    } else if (pow > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return left - 1;
};
// @lc code=end
