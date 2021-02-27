/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsWithObstacles = function (grid) {
  // 动态规划
  return dp(grid);

  // 辅助方法-动态规划
  function dp(grid) {
    // 状态方程：f(i,j) = f(i-1,j) + f(i,j-1)
    let rows = grid.length;
    let cols = grid[0].length;
    // 滚动数组优化
    // 因为是一行一行循环, 所以可以保留状态
    let dps = new Array(cols).fill(0);
    // 起始点判断
    dps[0] = grid[0][0] === 1 ? 0 : 1;
    // 循环
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          dps[j] = 0;
          continue;
        }
        if (j > 0) {
          dps[j] += dps[j - 1];
        }
      }
    }
    return dps[cols - 1];
  }
};
// @lc code=end
