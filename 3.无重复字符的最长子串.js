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
    // 双指针+数组(或map)
    let ans = 1;
    let map = new Map();
    let prev = 0;
    let curr = 0;
    // 最后一位也进行判断
    while (curr <= s.length) {
        if (map.has(s[curr])) {
            // 重复
            let meet = map.get(s[curr]);
            // meet有可能在prev之前
            // 表示上次相遇点, 忽略
            if (meet < prev) {
                map.set(s[curr], curr);
            } else {
                // meet在prev-curr中间
                // prev-meet可能大于meet-curr
                ans = Math.max(ans, meet - prev, curr - meet);
                prev = meet;
                // 更新值
                map.set(s[curr], curr);
            }
        } else {
            // 放入map
            map.set(s[curr], curr);
            // 判断大小
            ans = Math.max(ans, curr - prev + 1);
        }
        curr++;
    }
    return ans;
};
// @lc code=end
