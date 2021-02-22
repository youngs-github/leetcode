/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
	// 按照层的顺序依次入队
	let ans = [];
	// loop(root, ans);
	recur(root, ans);
	return ans;
	// 迭代
	function loop(node, ans) {
		let nodes = [node];
		let levels = [0];
		while (nodes.length) {
			let node = nodes.shift();
			let level = levels.shift();
			if (!node) continue;
			if (!ans[level]) ans[level] = [];
			ans[level].push(node.val);
			nodes.push(node.left, node.right);
			levels.push(level + 1, level + 1);
		}
	}
	// 递归
	function recur(node, ans, level = 0) {
		if (!node) return;
		if (!ans[level]) ans[level] = [];
		ans[level].push(node.val);
		recur(node.left, ans, level + 1);
		recur(node.right, ans, level + 1);
	}
};
// @lc code=end

