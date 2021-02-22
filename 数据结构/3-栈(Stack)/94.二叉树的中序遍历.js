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
var inorderTraversal = function (root) {
  // 前序遍历：根左右
  // 中序遍历：左根右
  // 后序遍历：左右根
  return loop(root);
  return recur(root);

  // 迭代
  function loop(root) {
    let ans = [];
    let curr = root;
    // 使用栈来解决
    let nodes = [];
    while (curr || nodes.length) {
      while (curr) {
        // 依次入栈, 后面再取
        nodes.push(curr);
        // 优先入栈左子节点
        // 该左子节点执行完后
        // curr变量为null, 故取其父节点
        // 父节点执行完后, 再取其父节点的右子节点
        // 循环完成
        curr = curr.left;
      }
      // 先入后出, 后入先出
      curr = nodes.pop();
      ans.push(curr.val);
      curr = curr.right;
    }
    return ans;
  }
  // 递归
  function recur(root) {
    let ans = [];
    inner(root, ans);
    return ans;
    // 辅助方法
    function inner(node, ans) {
      if (!node) return;
      inner(node.left, ans);
      ans.push(node.val);
      inner(node.right, ans);
    }
  }
};
// @lc code=end
