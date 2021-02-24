/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = new Array(a.length + b.length);
  // 循环
  let rest = 0;
  for (let i = 1; i <= a.length || i <= b.length || rest > 0; i++) {
    let a1 = +a[a.length - i] || 0;
    let b1 = +b[b.length - i] || 0;
    // 余数
    let t = a1 + b1 + rest;
    ans[ans.length - i] = t % 2;
    rest = Math.floor(t / 2);
  }
  return ans.join('');
};
// @lc code=end
