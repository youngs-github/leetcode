/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  // 前序遍历：根左右
  // 中序遍历：左根右
  // 后序遍历：左右根
  let ans = [];
  loop(root, ans);
  // recur(root, ans);
  return ans;
  // 迭代
  function loop(node, ans) {
    let curr = node;
    let prev = null;
    let nodes = [];
    while (curr || nodes.length) {
      if (curr) {
        // 再次入队
        // 后面要遍历其子节点
        // 完成遍历后还要取值
        nodes.push(curr);
        // 取左子节点
        // 按照左右中原则
        curr = curr.left;
      } else {
        // 当前无节点
        curr = nodes.pop();
        if (!curr.right || curr.right === prev) {
          // 第一次进这里时，右子节点是null，后续是非null
          // 当前节点无右子节点
          // 当前节点右子节点已经访问过
          ans.push(curr.val);
          // 保存已访问
          prev = curr;
          curr = null;
        } else {
          // 当前节点有右子节点
          // 将当前节点、当前右子节点入队
          nodes.push(curr, curr.right);
          // 取右子节点的左子节点
          // 开始下一轮遍历树(右子树)
          curr = curr.right.left;
        }
      }
    }
  }
  // 递归
  function recur(node, ans) {
    if (!node) return;
    recur(node.left, ans);
    recur(node.right, ans);
    ans.push(node.val);
  }
};
// @lc code=end
