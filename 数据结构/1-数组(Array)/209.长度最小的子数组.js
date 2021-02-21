/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      while (left < right && sum - nums[left] >= target) {
        sum -= nums[left++];
      }
      ans = Math.min(ans, right - left + 1);
    }
    right++;
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};
// @lc code=end
