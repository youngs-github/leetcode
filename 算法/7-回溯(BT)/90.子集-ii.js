/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 回溯法
  let ans = [];
  // 先排序
  nums.sort((a, b) => a - b);
  backtrack(ans, nums, 0, []);
  return ans;

  // 辅助方法
  function backtrack(ans, nums, i, stack) {
    // 全量添加
    ans.push([...stack]);
    // 递归
    for (let j = i; j < nums.length; j++) {
      stack.push(nums[j]);
      backtrack(ans, nums, j + 1, stack);
      stack.pop();
      // 去重
      while (nums[j] === nums[j + 1]) {
        j++;
      }
    }
  }
};
// @lc code=end
