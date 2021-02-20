/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	// 前序遍历：中左右
	// 中序遍历：左中右
	// 后序遍历：左右中
	let ans = [];
	// loop(root, ans);
	recur(root, ans);
	return ans;
	// 递归
	function recur(node, ans) {
		if (!node) return;
		// 左
		recur(node.left, ans);
		// 中
		ans.push(node.val);
		// 右
		recur(node.right, ans);
	}
	// 迭代
	function loop(node, ans) {
		let curr = node;
		let nodes = [];
		while (curr || nodes.length) {
			// 寻找左侧叶子节点
			while(curr) {
				// 第一次进入是根节点
				// 后续进入是左节点或者右节点
				nodes.push(curr);
				curr = curr.left;
			}
			// 取最后入队节点
			curr = nodes.pop();
			// 队列按顺序排列
			// 依次取值
			ans.push(curr.val);
			// 指向右节点
			// 下次循环若存在右节点
			// 则将右节点入队
			// 继续判断右节点是否有子节点
			curr = curr.right;
		}
	}
};
// @lc code=end

