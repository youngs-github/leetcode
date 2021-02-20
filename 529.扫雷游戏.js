/*
 * @lc app=leetcode.cn id=529 lang=javascript
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    let [x, y] = click;
    let maxY = board.length;
    let maxX = board[0].length;
    // 已访问
    let visited = new Array(maxY).fill(0).map(() => new Array(maxX).fill(false));
    // 挖到地雷
    if (board[x][y] === 'M') {
        board[x][y] = 'X';
        return;
    } else {
        visited[x][y] = true;
	}
	// 开始检测
	hasBomb(board, x, y, maxX, maxY, visited);
	return board;
    // 检测相邻
    function hasBomb(board, x, y, maxX, maxY, visited) {
        board[x][y] = 'B';
        visited[x][y] = true;
        // 遍历
        let fla = false;
        // 边界
        let minI = Math.max(0, x - 1);
        let maxI = Math.min(maxY, y + 1);
        let minJ = Math.max(0, y - 1);
        let maxJ = Math.min(maxY, x + 1);
        // 检测地雷
        for (let i = minI; i <= maxI; i++) {
            for (let j = minJ; j <= maxJ; j++) {
                if (visited[i][j]) continue;
                // 包含地雷
                if (board[i][j] === 'M') {
                    fla = true;
                }
            }
        }
        // 递归展示
        if (!fla) {
            for (let i = minI; i <= maxI; i++) {
                for (let j = minJ; j <= maxJ; j++) {
                    if (visited[i][j]) continue;
                    // 空方块
                    board[i][j] = 'B';
                    hasBomb(board, i, j, maxX, maxY, visited);
                }
            }
        }
    }
};
// @lc code=end
