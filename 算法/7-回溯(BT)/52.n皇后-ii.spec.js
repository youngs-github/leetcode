/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    // 回溯法
    let ans = 0;
    let board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill(false);
    }
    backtrack(n, 0, board);
    return ans;

    // 辅助方法-回溯
    function backtrack(n, index, board) {
        if (index >= n) {
            return ans++;
        }
        for (let i = 0; i < n; i++) {
            if (isValid(board, n, index, i)) {
                board[index][i] = true;
                backtrack(n, index + 1, board);
                board[index][i] = false;
            }
        }
    }
    // 辅助方法-有效位置
    function isValid(board, n, row, col) {
        // 判断行(略)
        // 判断列
        for (let i = 0; i < n; i++) {
            if (board[i][col]) return false;
        }
        // 判断对角线(左上角)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j]) return false;
        }
        // 判断对角线(右上角)
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j]) return false;
        }
        return true;
    }
};
// @lc code=end

// test
if (describe) {
    describe('52.n皇后-ii.spec.js', () => {
        it('示例01', () => {
            let ans = totalNQueens(1);
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = totalNQueens(2);
            expect(ans).toBe(0);
        });
        it('示例03', () => {
            let ans = totalNQueens(4);
            expect(ans).toBe(2);
        });
        it('示例04', () => {
            let ans = totalNQueens(8);
            expect(ans).toBe(92);
        });
    });
}
