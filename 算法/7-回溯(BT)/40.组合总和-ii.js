/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // 回溯法
    let ans = [];
    // 先排序
    candidates.sort((a, b) => a - b);
    backtrack(ans, candidates, 0, 0, target, []);
    return ans;

    // 辅助方法
    function backtrack(ans, nums, i, sum, target, stack) {
        // 完成
        if (sum === target) {
            return ans.push([...stack]);
        }
        // 超过(剪枝)
        if (sum > target) return;
        // 递归
        for (let j = i; j < nums.length; j++) {
            stack.push(nums[j]);
            backtrack(ans, nums, j + 1, sum + nums[j], target, stack);
			stack.pop();
            // 移除重复元素(剪枝)
            let t = nums[j];
            while (nums[j + 1] === t) {
                j++;
            }
        }
    }
};
// @lc code=end
