/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;
    k = k % len;
    if (!k) return;
    // 分两段进行交换
    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, nums.length - k, nums.length - 1);
    // 最后取反
    nums.reverse();
    // 倒置方法
    function reverse(arr, left, right) {
        // 包含left、right
        // 奇数则中间，偶数则两边
        let mid = (left + right) >> 1;
        for (let i = left; i <= mid; i++) {
            [arr[i], arr[right + left - i]] = [arr[right + left - i], arr[i]];
        }
    }
};
// @lc code=end
