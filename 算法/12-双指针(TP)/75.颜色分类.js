/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    // 扫描+填充两端
    for (let i = 0; i <= right; i++) {
        if (nums[i] === 0) {
            // 与左侧交换
            nums[i] = nums[left];
            nums[left++] = 0;
        }
        if (nums[i] === 2) {
            // 与右侧交换
            nums[i] = nums[right];
            nums[right--] = 2;
            // 如果此时nums[i]!==1, 需要将指针左移, 因为要i++
            if (nums[i] !== 1) {
                i--;
            }
        }
    }
};
// @lc code=end
