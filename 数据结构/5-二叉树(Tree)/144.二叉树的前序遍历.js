/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  // 前序遍历：根左右
  // 中序遍历：左根右
  // 后续遍历：左右根
  let ans = [];
  loop(root, ans);
  // recur(root, ans);
  return ans;
  // 迭代
  function loop(node, ans) {
    let curr = node;
    let nodes = [];
    while (curr || nodes.length) {
      while (curr) {
        ans.push(curr.val);
        nodes.push(curr);
        curr = curr.left;
      }
      curr = nodes.pop();
      curr = curr.right;
    }
  }
  // 递归
  function recur(node, ans) {
    if (!node) return;
    ans.push(node.val);
    recur(node.left, ans);
    recur(node.right, ans);
  }
};
// @lc code=end
