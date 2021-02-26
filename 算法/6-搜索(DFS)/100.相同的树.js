/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // null
    if (p === q) return true;
    if (!p || !q) return false;
    // 深度优先查找
    return dfs(p, q);

    // 辅助方法
    function dfs(p, q) {
        // null
        if (p === q) return true;
        if (!p || !q) return false;
        // 判断值
        if (p.val !== q.val) return false;
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }
};
// @lc code=end
