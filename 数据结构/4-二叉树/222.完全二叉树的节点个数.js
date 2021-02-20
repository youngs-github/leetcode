/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
    if (!root) return 0;
    // 先遍历
    return loop(root);
    // 索引法
    // return index(root);

    // loop
    function loop(node) {
        let count = 0;
        let nodes = [node];
        while (nodes.length) {
            let curr = nodes.pop();
            if (!curr) continue;
            count++;
            nodes.push(curr.left, curr.right);
        }
        return count;
    }
    // index
    function index(node) {
        // 利用二分法根据索引进行查找
        // 每次查找均从根节点出发
        // 利用层级下标定位
        // 先计算层级
        let leve = 0;
        let curr = node;
        while (curr) {
            curr = curr.left;
            leve++;
        }
        // 二分法查找
        let left = 2 ** (leve - 1);
        let right = 2 ** leve - 1;
        while (left < right) {
            // 取中点
            let mid = left + ((right - left + 1) >> 1);
            if (exist(node, mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;

        // 辅助方法，定位索引下节点
        function exist(root, index) {
            // 根据当前索引，从顶部一直循环至叶子结点
            // 当前节点：001
            // 左子节点：010
            // 右子节点：011
            // 3是：011
            // 6是：110
            // 左子节点是在二进制位加0
            // 右子节点是在二进制位加1
            let curr = root;
            let byte = index.toString(2);
            for (let i = 1; curr && i < byte.length; i++) {
                if (byte[i] === '0') {
                    // 左子节点
                    curr = curr.left;
                } else {
                    // 右子节点
                    curr = curr.right;
                }
            }
            return !!curr;
        }
    }
};
// @lc code=end
