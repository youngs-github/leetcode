/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    // 递归
    let ans = Number.MIN_SAFE_INTEGER;
    dfs(root);
    return ans;
    // 辅助方法-递归
    function dfs(root) {
        if (!root) return 0;
        // 计算左侧最大值
        let left = Math.max(0, dfs(root.left));
        // 计算右侧最大值
        let right = Math.max(0, dfs(root.right));
        // 合并计算最大值
        ans = Math.max(ans, left + root.val + right);
        // 返回当前节点构造最大值
        return root.val + Math.max(left, right);
    }
};
// @lc code=end

// @test
if (describe) {
    describe('124.二叉树中的最大路径和.js', () => {
        it('示例01', () => {
            let ans = maxPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
            expect(ans).toBe(6);
        });
        it('示例02', () => {
            let ans = maxPathSum(
                new TreeNode(
                    -10,
                    new TreeNode(9),
                    new TreeNode(20, new TreeNode(15), new TreeNode(7))
                )
            );
            expect(ans).toBe(42);
        });
        it('示例03', () => {
            let ans = maxPathSum(new TreeNode(-3));
            expect(ans).toBe(42);
        });
    });
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// @after-stub-for-debug-begin
module.exports = maxPathSum;
// @after-stub-for-debug-end
