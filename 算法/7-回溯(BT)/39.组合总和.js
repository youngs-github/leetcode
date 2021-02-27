/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // 回溯+剪枝
    let ans = [];
    // 先排序(无重复)
    candidates.sort((a, b) => a - b);
    backtrack(ans, candidates, 0, 0, target, []);
    return ans;

    // 辅助函数
    function backtrack(ans, nums, index, sum, target, stack) {
        // 完成
        if (sum === target) {
            ans.push([...stack]);
            return;
        }
        // 超过
        if (sum > target) return;
        // 递归
        for (let i = index; i < nums.length; i++) {
            stack.push(nums[i]);
            backtrack(ans, nums, i, sum + nums[i], target, stack);
            stack.pop();
        }
    }
};
// @lc code=end
