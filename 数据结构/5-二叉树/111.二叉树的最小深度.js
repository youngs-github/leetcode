/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */
var minDepth = function (root) {
	if (!root) return 0;
	let ans = [Number.MAX_SAFE_INTEGER];
	loop(root, 1, ans);
	// recur(root, 1, ans);
	return ans[0];
    // 递归
    function recur(node, level, ans) {
        if (!node) return;
        if (!node.left && !node.right) {
            ans[0] = Math.min(ans[0], level);
        } else {
            // 子节点
            recur(node.left, level + 1, ans);
            recur(node.right, level + 1, ans);
        }
    }
    // 迭代
    function loop(node, level, ans) {
        let nodes = [node];
        let levels = [level];
        while (nodes.length) {
            let node = nodes.pop();
			let leve = levels.pop();
			if (!node) continue;
            if (!node.left && !node.right) {
                ans[0] = Math.min(ans[0], leve);
            } else {
                // 子节点
                nodes.push(node.left);
                nodes.push(node.right);
                levels.push(leve + 1, leve + 1);
            }
        }
    }
};
// @lc code=end
