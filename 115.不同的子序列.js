/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    // 回溯法
    return bt(s, t);

    // 辅助方法-回溯
    function bt(s, t) {
        // 应该会超时
        let ans = 0;
        inner(s, t, 0, 0);
        return ans;

        // 递归
        function inner(s, t, start, index) {
            // 结束
            if (index === t.length) {
                return ans++;
            }
            // 循环
            for (let i = start; i < s.length; i++) {
                if (s[i] === t[index]) {
                    inner(s, t, i + 1, index + 1);
                }
            }
        }
    }
};
// @lc code=end

// @test
if (describe) {
    describe('115.不同的子序列.js', () => {
        it('示例01', () => {
            let ans = numDistinct('rabbbit', 'rabbit');
            expect(ans).toBe(3);
        });
        it('示例02', () => {
            let ans = numDistinct('babgbag', 'bag');
            expect(ans).toBe(5);
        });
    });
}
