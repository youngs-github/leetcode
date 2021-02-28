/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
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
    // f(0) = nums[0]
    // f(1) = max(nums[0], nums[1])
    // f(2) = max(f(1), f(0) + nums[2])
    // f(i) = max(f(i-1), f(i-2) + nums[i])
    // 不需要状态数组
    let p_1 = 0;
    let p_2 = 0;
    let p_3 = 0;
    for (let i = 0; i < nums.length; i++) {
      // 右移
      // 先将两个pre指针右移
      // 不然计算ans的时候, 两个pre指针仍然指向之前一步的位置
      p_1 = p_2;
      p_2 = p_3;
      // 计算
      p_3 = Math.max(p_2, p_1 + nums[i]);
    }
    return p_3;
  }
};
// @lc code=end
