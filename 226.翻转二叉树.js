/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if (!root) return null;
	// return loop(root);
	return loop2(root);
	// return recur(root);
	// return recur2(root);
	// return recur3(root);
	// 迭代
	function loop(root) {
		let copy = new TreeNode();
		let srcs = [root];
		let tars = [copy];
		while (srcs.length) {
			let src = srcs.pop();
			let tar = tars.pop();
			tar.val = src.val;
			if (src.left) {
				tar.right = new TreeNode();
				srcs.push(src.left);
				tars.push(tar.right);
			}
			if (src.right) {
				tar.left = new TreeNode();
				srcs.push(src.right);
				tars.push(tar.left);
			}
		}
		return copy;
	}
	// 不构建新的树
	function loop2(root) {
		let nodes = [root];
		while (nodes.length) {
			let node = nodes.pop();
			// 交换
			[node.left, node.right] = [node.right, node.left];
			// 子节点
			if (node.left) {
				nodes.push(node.left);
			}
			if (node.right) {
				nodes.push(node.right);
			}
		}
		return root;
	}
	// 递归
	function recur(root) {
		let copy = new TreeNode();
		inner(root, copy);
		return copy;
		// 辅助函数
		function inner(src, tar) {
			tar.val = src.val;
			// 子节点
			if (src.left) {
				tar.right = new TreeNode();
				inner(src.left, tar.right);
			}
			if (src.right) {
				tar.left = new TreeNode();
				inner(src.right, tar.left);
			}
		}
	}
	// 递归-不构建-2
	function recur2(root) {
		return inner(root);
		// 辅助方法
		function inner(root) {
			if (!root) return null;
			// 先递归到叶子结点
			let left = inner(root.left);
			let right = inner(root.right);
			// 交换节点
			root.left = right;
			root.right = left;
			// 返回当前节点，可用作left、right、root
			return root;
		}
	}
	// 递归-不构建-3
	function recur3(root) {
		return inner(root);
		// 辅助方法
		function inner(root) {
			if (!root) return null;
			// 先交换
			[root.left, root.right] = [root.right, root.left];
			// 在递归
			inner(root.left);
			inner(root.right);
			// 返回当前节点，可用作left、right、root
			return root;
		}
	}
};
// @lc code=end

