/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i + 1] === nums[i]) {
      // 移除i+1
      nums.splice(i + 1, 1);
    } else {
      i++;
    }
  }
};
// @lc code=end
