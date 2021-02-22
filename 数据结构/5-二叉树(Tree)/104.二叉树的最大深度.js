/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
	let ans = [0];
	recur(root, 1, ans)
	return ans[0];

	// 辅助方法
	function recur(node, level, ans) {
		if (!node) return;
		ans[0] = Math.max(ans[0], level);
		// 子
		recur(node.left, level + 1, ans);
		recur(node.right, level + 1, ans);
	}
};
// @lc code=end

