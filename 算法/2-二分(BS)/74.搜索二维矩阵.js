/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 二分法
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    // 计算row、col
    let row = (mid / cols) >> 0;
    let col = mid % cols;
    if (matrix[row][col] < target) {
      left = mid + 1;
    } else if (matrix[row][col] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end
