/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
	if (!root) return true;
    // 将左子树、右子树分开考虑
    // 左子树中的值必须都在某个区间
    // 右子树中的值必须都在某个区间
	// return dfs(root, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
	// 二叉搜索树的中序遍历是有序数组
	// 遍历过程中, 如果相邻元素不满足递增, 必定不合法
    return loop(root);

    // 辅助方法
    function dfs(node, lower, larger) {
        // 子树包含区间没有的值, 或者相等
        if (node.val <= lower || node.val >= larger) return false;
        return (
            (node.left ? dfs(node.left, lower, node.val) : true) &&
            (node.right ? dfs(node.right, node.val, larger) : true)
        );
	}
	// 辅助方法-中序遍历
	// 左中右顺序-必定是递增
	function loop(root) {
		let low = -Number.MAX_SAFE_INTEGER;
		let curr = root;
		let nodes = [];
		while (curr || nodes.length) {
			while (curr) {
				nodes.push(curr);
				curr = curr.left;
			}
			curr = nodes.pop();
			if (low >= curr.val) return false;
			// 右移
			low = curr.val;
			curr = curr.right;
		}
		return true;
	}
};
// @lc code=end
