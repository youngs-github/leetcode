/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // 回溯法
  let rows = board.length;
  let cols = board[0].length;
  // 单元格
  let align = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  // 已访问
  let visit = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
  // 找出第一位
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  return false;

  // 辅助方法
  function backtrack(row, col, index) {
    // 完成
    if (index === word.length - 1) {
      return board[row][col] === word[index];
    }
    // 条件
    if (board[row][col] !== word[index]) return false;
    // 已访问
    visit[row][col] = true;
    // 相邻只有4个单元格
    for (let [x, y] of align) {
      let i = row + x;
      let j = col + y;
      // 在范围内
      if (i >= 0 && i < rows && j >= 0 && j < cols) {
        // 未访问过
        if (!visit[i][j]) {
          if (backtrack(i, j, index + 1)) return true;
        }
      }
    }
    // 已访问
    visit[row][col] = false;
    return false;
  }
};
// @lc code=end
