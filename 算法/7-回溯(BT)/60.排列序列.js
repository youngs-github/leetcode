/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    return backtrack(n, k);
    // 回溯法
    function backtrack(n, k) {
        // 优化回溯法
        let ans = [];
        recur(ans, n, k, 0, [0], []);
        return ans[0];

        // 辅助方法
        function recur(ans, n, k, i, c, stack) {
            // 完成时
            if (ans.length) return;
            // 已完成
            if (i === n) {
                if (++c[0] === k) {
                    ans.push(stack.join(''));
                }
                return;
            }
            // 递归
            for (let j = 1; j <= n; j++) {
                if (!stack.includes(j)) {
                    stack.push(j);
                    recur(ans, n, k, i + 1, c, stack);
                    stack.pop();
                }
            }
        }
    }
};
// @lc code=end
