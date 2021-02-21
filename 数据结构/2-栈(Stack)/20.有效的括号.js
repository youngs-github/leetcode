/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 长度为偶数时, 必定不成对
  // 遍历时, 若为左括号, 则入栈
  // 遍历时, 若为右括号, 则判断是否闭合, 不能闭合返回false
  // 遍历完判断栈是否为空
  if (s.length % 2 === 1) return false;
  // 缓存基础配对
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  // 栈
  let stack = [];
  // 遍历
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      // 右括号, 需要闭合
      if (stack[stack.length - 1] === map[s[i]]) {
        // 闭合成功, 出栈
        stack.pop();
      } else {
        // 闭合失败, 不符合
        return false;
      }
    } else {
      // 左括号, 入栈
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
// @lc code=end
