/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  // 结果数组
  let ans = new Array(num1.length + num2.length);
  // 外层循环
  for (let i = 1; i <= num1.length; i++) {
    let n1 = +num1[num1.length - i];
    // 进一位
    let rest = 0;
    // 内层循环
    // 有效下标、可以进位
    for (let j = 1; j <= num2.length || rest > 0; j++) {
      // 逐位相乘, 结果按位放于ans数组中
      let n2 = +num2[num2.length - j] || 0;
      // ans下标从后往前走
      let k = ans.length - i - j + 1;
      let t = (ans[k] || 0) + rest + n1 * n2;
      ans[k] = t % 10;
      rest = Math.floor(t / 10);
    }
  }
  return ans.join('');
};
// @lc code=end
