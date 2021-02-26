/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 二分法
  if (nums.length === 1) return nums[0] === target ? 0 : -1;
  let left = 0;
  let right = nums.length - 1;
  // 此处用<=, 省略最后一步的===号判断
  while (left <= right) {
    let mid = (left + right) >> 1;
    // 已找到
    if (nums[mid] === target) return mid;
    // 判断有序
    // 左侧有序, ===号表示左侧只有1个元素
    if (nums[left] <= nums[mid]) {
      // 判断是否在左侧
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        // 右侧可能无序, 但target必定不在左侧
        left = mid + 1;
      }
    } else {
      // 左侧无序, 右侧必定有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 左侧可能无序, 但target必定不在右侧
        right = mid - 1;
      }
    }
  }
  return -1;
};
// @lc code=end
