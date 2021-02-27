/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    // dfs
    // return dfs(root.left, root.right);
    // loop
    return loop(root);

    // 辅助方法
    function dfs(left, right) {
        // null
        if (left === right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    }
    // 辅助方法-层序遍历
    function loop(root) {
        let ans = [];
        let nodes = [root];
        let leves = [0];
        while (nodes.length) {
            let node = nodes.pop();
            let leve = leves.pop();
            if (!ans[leve]) ans[leve] = [];
            if (node) {
                ans[leve].push(node.val);
                nodes.push(node.left, node.right);
                leves.push(leve + 1, leve + 1);
            } else {
                ans[leve].push(null);
            }
        }
        // 检测
        for (let i = 1; i < ans.length; i++) {
            let left = 0;
            let right = ans[i].length - 1;
            while (left < right) {
                if (ans[i][left++] !== ans[i][right--]) return false;
            }
        }
        return true;
    }
};
// @lc code=end
