/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 大顶堆（不会）
  // 滑动窗口
  return sliding(nums, k);

  function sliding(nums, k) {
    let ans = [];
    let win = [];
    for (let i = 0; i < nums.length; i++) {
      // 移除左侧
      if (i >= k && i - k >= win[0]) {
        // win中有足够数据
        win.shift();
      }
      // 移除右侧
      while (win.length && nums[win[win.length - 1]] <= nums[i]) {
        // win右侧数据比新加入的小
        win.pop();
      }
      // 入窗
      win.push(i);
      // 结果
      if (i >= k - 1) {
        ans.push(nums[win[0]]);
      }
    }
    return ans;
  }
};
// @lc code=end

// test
if (describe) {
  describe('239.滑动窗口最大值.js', () => {
    it('示例01', () => {
      let ans = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
      expect(ans.join()).toBe([3, 3, 5, 5, 6, 7].join());
    });
  });
}
