/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // 动态规划
  return dp(nums);

  // 辅助方法-dp
  function dp(nums) {
    if (nums.length === 1) return nums[0];
    // f(i) = max(f(i-1), f(i-2) + nums[i])
    // 需要一个变量来标记当前是否是取相邻房屋
    // 把第一个和最后一个分别置为0来计算, 取最大值
    return Math.max(inner(nums, 0), inner(nums, nums.length - 1));

    // 辅助方法
    function inner(nums, i) {
      let tmp = nums[i];
      nums[i] = 0;
      // 状态值
      let p_1 = 0;
      let p_2 = 0;
      let p_3 = 0;
      for (let i = 0; i < nums.length; i++) {
        p_1 = p_2;
        p_2 = p_3;
        p_3 = Math.max(p_2, p_1 + nums[i]);
      }
      nums[i] = tmp;
      return p_3;
    }
  }
};
// @lc code=end
