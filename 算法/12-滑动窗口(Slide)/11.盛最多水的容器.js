/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 双指针
  // 从两端开始遍历
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    // 逐个计算最大空间
    // 每一轮计算完毕移动短板
    // 保留长板有机会构造较大容量
    // 移动长板时, 一定不会使新的短板变长, 所以容量只会减少
    ans = Math.max(ans, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
// @lc code=end
