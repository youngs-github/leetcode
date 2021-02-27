/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 回溯法
  let ans = [];
  // 先排序
  nums.sort((a, b) => a - b);
  backstack(ans, nums, [], []);
  return ans;

  // 辅助方法
  function backstack(ans, nums, ids, stack) {
    if (nums.length === stack.length) {
      return ans.push([...stack]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!ids.includes(i)) {
        ids.push(i);
        stack.push(nums[i]);
        backstack(ans, nums, ids, stack);
        stack.pop();
        ids.pop();
        // 去重
        while (nums[i] === nums[i + 1]) {
          i++;
        }
      }
    }
  }
};
// @lc code=end
