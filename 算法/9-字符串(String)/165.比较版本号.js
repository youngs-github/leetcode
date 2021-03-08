/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let s1 = version1.split('.');
    let s2 = version2.split('.');
    let len = Math.max(s1.length, s2.length);
    for (let i = 0; i < len; i++) {
        let n1 = +(s1[i] || 0);
        let n2 = +(s2[i] || 0);
        if (n1 < n2) {
            return -1;
        } else if (n1 > n2) {
            return 1;
        }
    }
    return 0;
};
// @lc code=end

// @test
if (describe) {
    describe('165.比较版本号.js', () => {
        it('示例01', () => {
            let ans = compareVersion('1.0', '1.0.0');
            expect(ans).toBe(0);
        });
        it('示例02', () => {
            let ans = compareVersion('1.01', '1.001');
            expect(ans).toBe(0);
        });
        it('示例03', () => {
            let ans = compareVersion('0.1', '1.1');
            expect(ans).toBe(-1);
        });
        it('示例04', () => {
            let ans = compareVersion('1.0.1', '1');
            expect(ans).toBe(1);
        });
        it('示例05', () => {
            let ans = compareVersion('7.5.2.4', '7.5.3');
            expect(ans).toBe(-1);
        });
    });
}
