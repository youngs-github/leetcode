/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 动态规划
  return dp(n);

  // 辅助方法-dp
  function dp(n) {
    // f(0)=1
    // f(1)=1, 根节点有[1]种, 左子树有f(0)种, 右子树有f(0)种
    // f(2)=2, 根节点有[2]种, 左子树有f(0-1)种, 右子树有f(0-1)种
    // f(3)=5, 根节点有[3]种, 左子树有f(0-2)种, 右子树有f(0-2)种
    // f(4)=14, 根节点有[4]种, 左子树有f(0-3)种, 右子树有f(0-3)种
    // 状态方程：f(i) = C(i)(f(left) * f(i-left))
    let dps = [1, 1];
    // 外层循环
    // 计算3-n的状态
    for (let i = 2; i <= n; i++) {
      let c = 0;
      // 内层循环
      // 分别选取[0, i-1]作为根节点, 计算其左右子树对应可能
      for (let j = 0; j < i; j++) {
        c += dps[j] * dps[i - j - 1];
      }
      dps[i] = c;
    }
    return dps[n];
  }
};
// @lc code=end
