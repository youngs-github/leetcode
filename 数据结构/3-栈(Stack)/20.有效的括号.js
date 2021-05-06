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
  // hash
  const hash = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  // stack
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      // 遇到右括号, 判断是否匹配
      if (stack.pop() !== hash[s[i]]) {
        return false;
      }
    } else {
      // 遇到左括号, 入栈
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};
// @lc code=end
