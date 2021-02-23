/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  if (!s) return 0;
  // 1、忽略前面的空格
  // 2、读取正负号(可能不存在)
  // 3、读取有效数字(无效即丢弃, 可能有前置0, 必须是整数)
  // 4、范围判断(设定最大最小值)
  let syms = [];
  let nums = [];
  // 循环
  let i = 0;
  // 读取空格
  while (i < s.length && s[i] === ' ') {
    i++;
  }
  // 读取符号
  while (i < s.length && (s[i] === '+' || s[i] === '-')) {
    if (syms.length > 0) {
      // 多个符号
      return 0;
    }
    syms.push(s[i++]);
  }
  // 读取数字
  while (i < s.length) {
    if (s[i] >= '0' && s[i] <= '9') {
      // 有效数字
      nums.push(s[i++]);
    } else if (nums.length === 0) {
      // 无效字符
      return 0;
    } else {
      break;
    }
  }
  // 符号判断
  if (syms.length > 1) return 0;
  // 组织结构
  // 数字处理(可选用乘法)
  let ans = 0;
  let mul = 1;
  for (let i = nums.length - 1; i >= 0; i--, mul *= 10) {
    ans += nums[i] * mul;
  }
  return syms[0] === '+' || !syms[0]
    ? Math.min(ans, 2 ** 31 - 1)
    : Math.max(-ans, -(2 ** 31));
};
// @lc code=end
