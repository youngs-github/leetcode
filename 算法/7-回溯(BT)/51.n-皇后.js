/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 回溯法
  let ans = [];
  let board = new Array(n);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.');
  }
  backtrack(ans, board, 0);
  return ans;

  // 辅助方法-回溯
  function backtrack(ans, board, row) {
    if (row === board.length) {
      let res = new Array(board.length);
      for (let i = 0; i < board.length; i++) {
        res[i] = board[i].join('');
      }
      return ans.push(res);
    }
    // 针对单行进行操作
    for (let col = 0; col < board.length; col++) {
      // 检测
      if (isValid(board, row, col)) {
        // 在[i,j]位置放上
        board[row][col] = 'Q';
        backtrack(ans, board, row + 1);
        board[row][col] = '.';
      }
    }
  }
  // 辅助方法-验证位置
  function isValid(board, row, col) {
    // 当前按行走, 故不用验证行
    // 验证列
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
        return false;
      }
    }
    // 验证右上角
    for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    // 验证左上角
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
        return false;
      }
    }
    return true;
  }
};
// @lc code=end
