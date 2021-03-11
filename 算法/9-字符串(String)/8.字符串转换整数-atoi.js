/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    // 去空格
    s = s.trim();
    if (!s) return 0;
    // 1、判断初始位是否有效
    // 2、从有效数字位开始计算, 每一步判断是否越界
    if (!isNum(s, 0) && !isSym(s, 0)) return 0;
    let ans = 0;
    // 起点位置
    let i = isSym(s, 0) ? 1 : 0;
    // 符合正负
    let sym = s[0] === '-';
    // 边界范围
    let max = 2 ** 31 - 1;
    let min = -(2 ** 31);
    // 顺序遍历
    while (i < s.length && isNum(s, i)) {
        ans = ans * 10 + +s[i];
        if ((sym ? -ans : ans) > max) return max;
        if ((sym ? -ans : ans) < min) return min;
        i++;
    }
    return sym ? -ans : ans;

    // 辅助方法-是否数字
    function isNum(s, i) {
        return s[i] >= '0' && s[i] <= '9';
    }
    // 辅助方法-是否符合
    function isSym(s, i) {
        return s[i] === '-' || s[i] === '+';
    }
};
// @lc code=end

// @test
if (describe) {
    describe('8.字符串转换整数-atoi.js', () => {
        it('示例01', () => {
            let ans = myAtoi('');
            expect(ans).toBe(0);
        });
        it('示例02', () => {
            let ans = myAtoi('42');
            expect(ans).toBe(42);
        });
        it('示例03', () => {
            let ans = myAtoi('   -42');
            expect(ans).toBe(-42);
        });
        it('示例04', () => {
            let ans = myAtoi('4193 with words');
            expect(ans).toBe(4193);
        });
        it('示例05', () => {
            let ans = myAtoi('words and 987');
            expect(ans).toBe(0);
        });
        it('示例06', () => {
            let ans = myAtoi('-91283472332');
            expect(ans).toBe(-2147483648);
        });
    });
}
