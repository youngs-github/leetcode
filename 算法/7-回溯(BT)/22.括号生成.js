/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [];
    backtrack(ans, n, 0, 0, []);
    return ans;

    // 回溯
    function backtrack(ans, n, i, sum, stack) {
        // 使用值表示(的个数(亦即需要补)的个数)
        if (i === 2 * n) {
            // 已到达, 判断是否有效
            if (sum === 0) {
                ans.push(stack.join(''));
            }
            return;
        }
        // 左括号
        stack.push('(');
        backtrack(ans, n, i + 1, sum + 1, stack);
        stack.pop();
        // 右括号(剪枝)
        if (sum > 0) {
            stack.push(')');
            backtrack(ans, n, i + 1, sum - 1, stack);
            stack.pop();
        }
    }
};
// @lc code=end
