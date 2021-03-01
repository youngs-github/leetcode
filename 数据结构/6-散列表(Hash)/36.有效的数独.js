/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // hash-map
    // 改成一次遍历
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let tian = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Set()));
    // 遍历时, 根据下标计算具体存储位置
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            // 存入rows中
            if (rows[i].has(board[i][j])) {
                return false;
            } else {
                rows[i].add(board[i][j]);
            }
            // 存入cols中
            if (cols[j].has(board[i][j])) {
                return false;
            } else {
                cols[j].add(board[i][j]);
            }
            // 存入tian中
			let ii = i / 3 >> 0;
			let jj = j / 3 >> 0;
            if (tian[ii][jj].has(board[i][j])) {
                return false;
            } else {
                tian[ii][jj].add(board[i][j]);
            }
        }
    }
    return true;
};
// @lc code=end
