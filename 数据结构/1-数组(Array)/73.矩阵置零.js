/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // 原地改动
    // 常数空间
	// 将0所在行列非0元素改为true
	// 第一次遍历, 置为true
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				setZero(matrix, i, j);
			}
		}
	}
	// 第二次遍历, 置为0
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === true) {
				matrix[i][j] = 0;
			}
		}
	}

    // 辅助方法-置0
    function setZero(grid, row, col) {
        // 列置zero
        for (let j = 0; j < grid[row].length; j++) {
            if (grid[row][j] !== 0) {
                grid[row][j] = true;
            }
        }
        // 行置zero
        for (let i = 0; i < grid.length; i++) {
            if (grid[i][col] !== 0) {
                grid[i][col] = true;
            }
        }
    }
};
// @lc code=end
