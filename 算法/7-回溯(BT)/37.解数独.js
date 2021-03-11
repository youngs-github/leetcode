/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    // 回溯+hash
    let rows = new Array(9).fill(0).map(() => new Set());
    let cols = new Array(9).fill(0).map(() => new Set());
    let blcs = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Set()));
    // 先存储
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                rows[i].add(board[i][j]);
                cols[j].add(board[i][j]);
                blcs[(i / 3) >> 0][(j / 3) >> 0].add(board[i][j]);
            }
        }
    }
    // 按照行->列方法
    backtrack(board, 0, 0, [false]);
    return board;
    // 辅助方法-回溯
    function backtrack(board, row, col, ans) {
        if (ans[0]) {
            return;
        }
        // 找出第一个可填写位置
        let i, j;
        (function () {
            for (i = row; i < 9; i++) {
                for (j = 0; j < 9; j++) {
                    if (board[i][j] === '.') return;
                }
            }
        })();
        if (i > 8 && j > 8) {
            return (ans[0] = true);
        }
        for (let k = 1; k < 10; k++) {
            let tmp = String(k);
            // 剪枝
            if (rows[i].has(tmp)) continue;
            if (cols[j].has(tmp)) continue;
            if (blcs[(i / 3) >> 0][(j / 3) >> 0].has(tmp)) continue;
            // 放入
            rows[i].add(tmp);
            cols[j].add(tmp);
            blcs[(i / 3) >> 0][(j / 3) >> 0].add(tmp);
            // 递归
            board[i][j] = tmp;
            backtrack(board, i, j, ans);
            if (!ans[0]) {
                board[i][j] = '.';
                // 移除
                rows[i].delete(tmp);
                cols[j].delete(tmp);
                blcs[(i / 3) >> 0][(j / 3) >> 0].delete(tmp);
            }
        }
    }
};
// @lc code=end

// @test
if (describe) {
    describe('37.解数独.js', () => {
        it('示例01', () => {
            let ans = solveSudoku([
                ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
                ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
                ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
                ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
                ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
                ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
                ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
                ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
                ['.', '.', '.', '.', '8', '.', '.', '7', '9']
            ]);
            expect(ans.map((arr) => arr.join()).join()).toBe(
                [
                    ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
                    ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
                    ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
                    ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
                    ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
                    ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
                    ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
                    ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
                    ['3', '4', '5', '2', '8', '6', '1', '7', '9']
                ]
                    .map((arr) => arr.join())
                    .join()
            );
        });
    });
}
