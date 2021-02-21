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
    // 迭代
    return loop(root);
    // 递归
    return recur(root);

    // 迭代
    function loop(root) {
        let lefts = [root.left];
        let rights = [root.right];
        while (lefts.length) {
            let left = lefts.pop();
            let right = rights.pop();
            // 同为null
            if (left === right) continue;
            // 其一之一为null
            if (!(left && right)) return false;
            // 值不等
            if (left.val !== right.val) return false;
            // 子节点
            lefts.push(left.right, left.left);
            rights.push(right.left, right.right);
        }
        return true;
    }
    // 递归
    function recur(root) {
        return inner(root.left, root.right);
        // 辅助方法
        function inner(left, right) {
            // 同为null
            if (left === right) return true;
            // 其一之一为null
            if (!(left && right)) return false;
            // 值不等
            if (left.val !== right.val) return false;
            // 子节点
            return inner(left.left, right.right) && inner(left.right, right.left);
        }
    }
};
// @lc code=end
