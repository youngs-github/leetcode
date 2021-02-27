/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 回溯法
  let ans = [];
  backtrack(ans, nums, 0, []);
  return ans;

  // 辅助方法
  function backtrack(ans, nums, i, stack) {
    // 均放入数组
    ans.push([...stack]);
    // 递归
    // 第一种：可以重复添加(0-N)
    // 第二种：可以往后添加(i-N)
    for (let j = i; j < nums.length; j++) {
      stack.push(nums[j]);
      backtrack(ans, nums, j + 1, stack);
      stack.pop();
    }
  }
};
// @lc code=end
