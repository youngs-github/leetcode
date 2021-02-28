/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 动态规划
  return dp(nums);
  // 暴力法
  return vi(nums);

  // 辅助方法-dp
  function dp(nums) {
    // 存在负数, 导致乘积位负数
    // 因此, 需要维护两个状态数组
    // 当前值为负数时, 将最大、最小元素交换
    // f(1) = nums[0]
    // f(2) = max(nums[1], f(1), f(1) * nums[1])
    // f(3) = max(nums[3], f(2), f(2) * nums[3])
    // 状态方程：f(i).max = max(nums[i], f(i-1).max * nums[i])
    // 状态方程：f(i).min = min(nums[i], f(i-1).min * nums[i])
    // 状态数组
    let ans = Number.MIN_SAFE_INTEGER;
    let max = 1;
    let min = 1;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        // 交换
        [max, min] = [min, max];
      }
      // 状态记录
      max = Math.max(nums[i], max * nums[i]);
      min = Math.min(nums[i], min * nums[i]);
      // 取最大值
      ans = Math.max(ans, max);
    }
    return ans;
  }

  // 辅助方法-vi
  function vi(nums) {
    let ans = nums[0];
    for (let i = 0; i < nums.length; i++) {
      let res = 1;
      for (let j = i; j < nums.length; j++) {
        ans = Math.max(ans, (res *= nums[j]));
      }
    }
    return ans;
  }
};
// @lc code=end
