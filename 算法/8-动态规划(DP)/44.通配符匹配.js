/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 动态规划
  return dp(s, p);

  // 辅助方法-动态规划
  function dp(s, p) {
    // 类似正则表达式, 该题简单一些
    // 状态方程：f(i, j) = f(i-1, j-1) + match(i, j)
    // 1、p[j]==='*', 需要区分p[j]匹配单个字符还是多个字符
    // 2、p[j]!=='*', 需要区分s[i]、p[j]能否单独匹配
    // 范围
    let m = s.length;
    let n = p.length;
    // 状态数组
    let dps = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));
    // 初始化
    dps[0][0] = true;
    // dps[i][0], p选空串时, 计算s是否能匹配(肯定不能, 不用填充)
    // dps[0][j], s选空串时, 计算p是否能匹配(如果p[j]==='*'则可以)
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
        // 只需要填充p[j]==='*'位置
        dps[0][j] = true;
      } else {
        // 遇到无法匹配的字符
        break;
      }
    }
    // 开始计算
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
          // 零个字符dps[i][j-1], 即当前*没有匹配任何字符
          // 多个字符dps[i-1][j], 即当前*匹配了有效字符
          dps[i][j] = dps[i][j - 1] || dps[i - 1][j];
        } else if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
          // 单独匹配, 依赖前一位
          dps[i][j] = dps[i - 1][j - 1];
        }
      }
    }
    return dps[m][n];
  }
};
// @lc code=end
