/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  // 双指针+数组(或map/set)
  // 滑动窗口做比较简单
  let ans = 1;
  let left = 0;
  let right = 0;
  let exists = new Map();
  while (right < s.length) {
    // 不断右移right指针, 直到遇到重复
    if (exists.has(s[right])) {
      // 遇到重复时, 左指针右移
      // 可能遇到的重复是之前过期的
      let meet = exists.get(s[right]);
      // meet是相遇位置, 旧地址, 故需要+1
      left = Math.max(left, meet + 1);
    }
    // 取最大值
    ans = Math.max(ans, right - left + 1);
    // 更新索引值
    exists.set(s[right], right++);
  }
  return ans;
};
// @lc code=end
