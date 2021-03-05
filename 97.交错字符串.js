/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

const { it, expect } = require('@jest/globals');

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    // 回溯
    return bt(s1, s2, s3);

    // 辅助方法-回溯
    function bt(s1, s2, s3) {
        let ans = [false];
        inner(s1, s2, s3, 0, 0, 0);
        return ans[0];

        // 递归
        function inner(s1, s2, s3, i1, i2, i3) {
            if (ans[0]) return;
            if (i1 === s1.length && i2 === s2.length && i3 === s3.length) {
                return (ans[0] = true);
            }
            if (s1[i1] === s3[i3] && !!s1[i1]) {
                let ii1 = i1;
                let ii3 = i3;
                while (s1[ii1] === s3[ii3] && ii1 < s1.length && ii3 < s3.length) {
                    inner(s1, s2, s3, ++ii1, i2, ++ii3);
                }
                inner(s1, s2, s3, ii1, i2, ii3);
            }
            if (s2[i2] === s3[i3] && !!s2[i2]) {
                let ii2 = i2;
                let ii3 = i3;
                while (s2[ii2] === s3[ii3] && ii2 < s2.length && ii3 < s3.length) {
                    inner(s1, s2, s3, i1, ++ii2, ++ii3);
                }
                inner(s1, s2, s3, i1, ii2, ii3);
            }
        }
    }
};
// @lc code=end

// @test
if (describe) {
    describe('97.交错字符串.js', () => {
        it('示例01', () => {
            let ans = isInterleave('', '', '');
            expect(ans).toBe(true);
        });
        it('示例02', () => {
            let ans = isInterleave('a', 'b', 'a');
            expect(ans).toBe(false);
        });
        it('示例03', () => {
            let ans = isInterleave('aa', 'ba', 'aaba');
            expect(ans).toBe(true);
        });
        it('示例04', () => {
            let ans = isInterleave('aabcc', 'dbbca', 'aadbbcbcac');
            expect(ans).toBe(true);
        });
        it('示例05', () => {
            let ans = isInterleave('aabcc', 'dbbca', 'aadbbbaccc');
            expect(ans).toBe(false);
        });
        it('示例06', () => {
            let ans = isInterleave('aabcc', 'dbbca', 'aadbcbbcac');
            expect(ans).toBe(true);
        });
    });
}
