/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ans = [];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    while (nums[left] + right - left + 1 === nums[right + 1]) {
      right++;
    }
    // 整理
    if (left === right) {
      ans.push(String(nums[left]));
      left++;
    } else {
      ans.push(String(nums[left] + '->' + nums[right]));
      left = right + 1;
    }
    right++;
  }
  return ans;
};
// @lc code=end
