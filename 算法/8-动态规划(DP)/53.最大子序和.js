/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 暴力法
  return vi(nums);
  // 动态规划
  return dp(nums);

  // 辅助方法-暴力
  function vi(nums) {
    let ans = nums[0];
    for (let i = 0; i < nums.length; i++) {
      let s = 0;
      for (let j = i; j < nums.length; j++) {
        s += nums[j];
        ans = Math.max(ans, s);
      }
    }
    return ans;
  }
  // 辅助方法-动态规划
  function dp(nums) {
    // 要求子序连续
    // 状态方程：f(i) = max(nums[i], f(i-1) + nums[i])
    let ans = nums[0];
    let pre = nums[0];
    for (let i = 1; i < nums.length; i++) {
      let tmp = ans;
      ans = Math.max(nums[i], nums[i] + pre);
      pre = tmp;
    }
    return ans;
  }
};
// @lc code=end
