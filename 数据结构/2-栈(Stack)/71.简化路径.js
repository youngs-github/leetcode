/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 用栈解决
  let stack = [];
  // 遍历
  path.split('/').forEach((p) => {
    if (p === '..') {
      // 上级目录出栈
      stack.pop();
    } else if (p !== '' && p !== '.') {
      // 不为空且不为.时入栈
      stack.push(p);
    }
  });
  return '/' + stack.join('/');
};
// @lc code=end
