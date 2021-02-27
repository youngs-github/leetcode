/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 动态规划
  return dp(grid);

  // 辅助方法-动态规划
  function dp(grid) {
    // 状态方程：f(i,j) = min(f(i-1,j), f(i,j-1)) + grid[i][j]
    let rows = grid.length;
    let cols = grid[0].length;
    // 状态数组：该题不需要状态数组, 修改原数组即可
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // 第一行不存在i-1
        // 第一列不存在j-1
        if (i === 0) {
          grid[i][j] += grid[i][j - 1] || 0;
        } else if (j === 0) {
          grid[i][j] += grid[i - 1] ? grid[i - 1][j] : 0;
        } else {
          grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
      }
    }
    return grid[rows - 1][cols - 1];
  }
};
// @lc code=end
