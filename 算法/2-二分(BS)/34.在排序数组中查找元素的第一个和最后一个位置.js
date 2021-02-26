/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  if (!nums.length) return ans;
  if (nums.length === 1) return nums[0] === target ? [0, 0] : ans;
  // 查找左侧
  let left = findLeft(nums, target);
  let right = findRight(nums, target);
  // 验证
  if (nums[left] !== target) {
    return ans;
  }
  return [left, right];

  // 辅助方法
  function findLeft(nums, target) {
    // 寻找target最左侧位置
    // 不能直接返回mid, 需要让两个指针相遇, 此时能够确定位置
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 优先向左侧靠拢
      // 只要mid处大于或等于target时, 即向左侧区间移动
      if (target > nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return nums[left] === target ? left : left + 1;
  }
  // 辅助方法
  function findRight(nums, target) {
    // 寻找target最右侧位置
    // 不能直接返回mid, 需要让两个指针相遇, 此时能够确定位置
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      let mid = (left + right) >> 1;
      // 优先向右侧靠拢
      // 当mid处小于等于target时, 均向右侧区间移动
      if (target >= nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return nums[left] === target ? left : left - 1;
  }
};
// @lc code=end
