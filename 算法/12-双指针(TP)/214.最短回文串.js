/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    // 即为求从左侧开始, 最长的回文串
    let right = s.length - 1;
    for (; right >= 0; right--) {
        let i = 0;
        let j = right;
        while (i < j && s[i] === s[j]) {
            i++;
            j--;
        }
        // 找到
        if (i >= j) {
            break;
        }
    }
    // 补齐字符
    let left = '';
    for (let i = s.length - 1; i > right; i--) {
        left += s[i];
    }
    return left + s;
};
// @lc code=end

// @test
if (describe) {
    describe('214.最短回文串.js', () => {
        it('示例01', () => {
            let ans = shortestPalindrome('');
            expect(ans).toBe('');
        });
        it('示例02', () => {
            let ans = shortestPalindrome('a');
            expect(ans).toBe('a');
        });
        it('示例03', () => {
            let ans = shortestPalindrome('abcd');
            expect(ans).toBe('dcbabcd');
        });
        it('示例04', () => {
            let ans = shortestPalindrome('aacecaaa');
            expect(ans).toBe('aaacecaaa');
        });
    });
}
