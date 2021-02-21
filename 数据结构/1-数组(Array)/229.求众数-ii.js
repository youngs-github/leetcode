/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let ans = [];
  sort(nums, ans);
  return ans;

  // 排序O(N*logN)
  function sort(nums, ans) {
    let size = Math.floor(nums.length / 3);
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = 0;
    while (right < nums.length) {
      while (nums[right + 1] === nums[left]) {
        right++;
      }
      if (right - left >= size) {
        ans.push(nums[left]);
      }
      left = right++ + 1;
    }
  }
};
// @lc code=end
