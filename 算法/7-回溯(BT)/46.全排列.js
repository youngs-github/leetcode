/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 回溯法
  let ans = [];
  backstack(ans, nums, []);
  return ans;

  // 辅助方法
  function backstack(ans, nums, stack) {
    if (stack.length === nums.length) {
      return ans.push([...stack]);
    }
    for (let num of nums) {
      if (!stack.includes(num)) {
        stack.push(num);
        backstack(ans, nums, stack);
        stack.pop();
      }
    }
  }
};
// @lc code=end
