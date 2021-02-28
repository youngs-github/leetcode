/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 动态规划
  // return dp(triangle);
  // return dp2(triangle);
  return dp3(triangle);

  // 辅助方法-dp
  function dp(triangle) {
    // 自底向上
    // 从倒数第二行开始计算
    for (let i = triangle.length - 2; i >= 0; i--) {
      // 计算每一个单元格最小数
      for (let j = 0; j < triangle[i].length; j++) {
        triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
    }
    return triangle[0][0];
  }
  // 辅助方法-dp2
  function dp2(triangle) {
    // 自顶向下
    // 从第二行开始计算
    for (let i = 1; i < triangle.length; i++) {
      // 计算每一个单元格最小数
      for (let j = 0; j < triangle[i].length; j++) {
        triangle[i][j] += Math.min(
          triangle[i - 1][j - 1] !== undefined
            ? triangle[i - 1][j - 1]
            : Number.MAX_SAFE_INTEGER,
          triangle[i - 1][j] !== undefined
            ? triangle[i - 1][j]
            : Number.MAX_SAFE_INTEGER
        );
      }
    }
    return Math.min(...triangle[triangle.length - 1]);
  }
  // 辅助方法-dp3-空间优化
  function dp3(triangle) {
    // 只使用N个元素空间
    let dps = new Array(triangle.length);
    // 自底向上
    for (let i = triangle.length - 1; i >= 0; i--) {
      // 计算每列元素
      for (let j = 0; j < triangle[i].length; j++) {
        if (i === triangle.length - 1) {
          // 初始化
          dps[j] = triangle[i][j];
        } else {
          // 开始计算
          dps[j] = triangle[i][j] + Math.min(dps[j], dps[j + 1]);
        }
      }
    }
    return dps[0];
  }
};
// @lc code=end
