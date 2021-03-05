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
    // 滑动窗口
    // hashmap
    let ans = 0;
    let left = 0;
    let right = 0;
    let hashmap = new Map();
    while (right < s.length) {
        // 遍历过程中
        // 如果遇到重复字符
        // 取其当前下标, 即最大下标
        if (hashmap.has(s[right])) {
            left = Math.max(left, hashmap.get(s[right]));
        }
        // 计算
        ans = Math.max(ans, right - left + 1);
        // 更新
        hashmap.set(s[right++], right);
    }
    return ans;
};
// @lc code=end

// @test
if (describe) {
    describe('3.无重复字符的最长子串.js', () => {
        it('示例01', () => {
            let ans = lengthOfLongestSubstring('');
            expect(ans).toBe(0);
        });
        it('示例02', () => {
            let ans = lengthOfLongestSubstring('bbbbb');
            expect(ans).toBe(1);
        });
        it('示例03', () => {
            let ans = lengthOfLongestSubstring('pwwkew');
            expect(ans).toBe(3);
        });
        it('示例04', () => {
            let ans = lengthOfLongestSubstring('abcabcbb');
            expect(ans).toBe(3);
        });
    });
}
