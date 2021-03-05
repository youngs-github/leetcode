/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // bfs
  return bfs(grid);
  // dfs
  return dfs(grid);

  // 辅助方法-bfs
  function bfs(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // 结果
    let ans = 0;
    // 队列
    let queue = [];
    // 递归开始
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '1') {
          inner(grid, i, j, queue);
          ans++;
        }
      }
    }
    return ans;

    // bfs方法
    function inner(grid, row, col, queue) {
      // 广度优先遍历
      queue.push([row, col]);
      while (queue.length) {
        let [i, j] = queue.pop();
        // 标记已访问
        grid[i][j] = '0';
        // 检查相邻元素
        if (i > 0 && grid[i - 1][j] === '1') {
          queue.push([i - 1, j]);
        }
        if (j < n - 1 && grid[i][j + 1] === '1') {
          queue.push([i, j + 1]);
        }
        if (i < m - 1 && grid[i + 1][j] === '1') {
          queue.push([i + 1, j]);
        }
        if (j > 0 && grid[i][j - 1] === '1') {
          queue.push([i, j - 1]);
        }
      }
    }
  }

  // 辅助方法-dfs
  function dfs(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // 结果
    let ans = 0;
    // 递归开始
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === '1') {
          inner(grid, i, j);
          ans++;
        }
      }
    }
    return ans;

    // 递归方法
    function inner(grid, row, col) {
      // 已访问
      if (grid[row][col] === '0') return;
      // 递归判断其四周
      grid[row][col] = '0';
      // 上方
      if (row > 0 && grid[row - 1][col] === '1') {
        inner(grid, row - 1, col);
      }
      // 右侧
      if (col < n - 1 && grid[row][col + 1] === '1') {
        inner(grid, row, col + 1);
      }
      // 下方
      if (row < m - 1 && grid[row + 1][col] === '1') {
        inner(grid, row + 1, col);
      }
      // 左侧
      if (col > 0 && grid[row][col - 1] === '1') {
        inner(grid, row, col - 1);
      }
    }
  }
};
// @lc code=end

// test
if (describe) {
  describe('200.岛屿数量.js', () => {
    it('示例01', () => {
      let ans = numIslands([
        ['1', '1', '1', '1', '0'],
        ['1', '1', '0', '1', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0']
      ]);
      expect(ans).toBe(1);
    });
    it('示例02', () => {
      let ans = numIslands([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1']
      ]);
      expect(ans).toBe(3);
    });
  });
}
