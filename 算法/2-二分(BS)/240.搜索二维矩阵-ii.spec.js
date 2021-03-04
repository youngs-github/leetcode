/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  // 1、暴力法
  // return vi(matrix, target);
  // 2、横向、纵向(均二分)
  // return bs(matrix, target);
  // 3、左下角、右上角(位移法)
  return wy(matrix, target);

  // 暴力法
  function vi(matrix, target) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === target) return true;
      }
    }
    return false;
  }
  // 横向、纵向
  function bs(matrix, target) {
    if (m <= n) {
      for (let i = 0; i < m; i++) {
        if (binarySearch(matrix, i, target, false)) return true;
      }
    } else {
      for (let i = 0; i < n; i++) {
        if (binarySearch(matrix, i, target, true)) return true;
      }
    }
    return false;
  }
  // 左下角、右上角位移法
  function wy(matrix, target) {
    let i = m - 1;
    let j = 0;
    while (i >= 0 && j < n) {
      if (matrix[i][j] < target) {
        // 比目标小, 则右移
        j++;
      } else if (matrix[i][j] > target) {
        // 比目标大, 则上移
        i--;
      } else {
        return true;
      }
    }
    return false;
  }

  // 辅助方法-二分
  function binarySearch(matrix, index, target, vertical) {
    let lo = 0;
    let hi = vertical ? m - 1 : n - 1;
    // 需要精确相等时, 才可等号
    while (lo <= hi) {
      let mid = (lo + hi) >> 1;
      if (vertical) {
        if (matrix[mid][index] < target) {
          lo = mid + 1;
        } else if (matrix[mid][index] > target) {
          hi = mid - 1;
        } else {
          return true;
        }
      } else {
        if (matrix[index][mid] < target) {
          lo = mid + 1;
        } else if (matrix[index][mid] > target) {
          hi = mid - 1;
        } else {
          return true;
        }
      }
    }
    return false;
  }
};
// @lc code=end

// test
if (describe) {
  describe('240.搜索二维矩阵-ii.spec.js', () => {
    it('示例01', () => {
      let ans = searchMatrix(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        5
      );
      expect(ans).toBe(true);
    });
    it('示例02', () => {
      let ans = searchMatrix(
        [
          [1, 4, 7, 11, 15],
          [2, 5, 8, 12, 19],
          [3, 6, 9, 16, 22],
          [10, 13, 14, 17, 24],
          [18, 21, 23, 26, 30]
        ],
        20
      );
      expect(ans).toBe(false);
    });
    it('示例03', () => {
      let ans = searchMatrix([[-1, 3]], 1);
      expect(ans).toBe(false);
    });
    it('示例04', () => {
      let ans = searchMatrix([[-1, 3]], 3);
      expect(ans).toBe(true);
    });
  });
}
