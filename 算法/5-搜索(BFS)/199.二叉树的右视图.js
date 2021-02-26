/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
    if (!root) return [];
    // bfs
    return bfs(root);
    // dfs
    // let ans = [];
    // dfs(root, ans);
    // return ans;
    // loop
    // return loop(root);

    // 辅助方法-bfs
    function bfs(root) {
        let ans = [];
        let nodes = [root];
        while (nodes.length) {
            // 个数
            let size = nodes.length;
            // 取最后
            ans.push(nodes[size - 1].val);
            // 层序遍历
            for (let i = 0; i < size; i++) {
                // 入队
                let node = nodes.shift();
                if (node.left) nodes.push(node.left);
                if (node.right) nodes.push(node.right);
            }
        }
        return ans;
    }
    // 辅助方法-dfs
    function dfs(root, ans, level = 0) {
        // 右中左顺序
        // 若层无数据, 则写入
        if (ans.length === level) {
            ans[level] = root.val;
        }
        // 递归子节点
        if (root.right) dfs(root.right, ans, level + 1);
        if (root.left) dfs(root.left, ans, level + 1);
    }
    // 层序遍历-改进版
    function loop(root) {
        let ans = [];
        let level = -1;
        let nodes = [root];
        while (nodes.length) {
            // 层
            if (!ans[++level]) {
                ans[level] = [];
            }
            // 节点数
            let size = nodes.length;
            // 遍历层
            for (let i = 0; i < size; i++) {
                let node = nodes.shift();
                ans[level].push(node.val);
                if (node.left) nodes.push(node.left);
                if (node.right) nodes.push(node.right);
            }
        }
        return ans.map((leves) => leves[leves.length - 1]);
    }
};
// @lc code=end
