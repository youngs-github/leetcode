/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // 栈
    // 使用sign记录前置符号
    // 如果前置是+/-, 入栈后续处理
    // 如果前置是*//, 计算栈顶元素
    let sign = '+';
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        // 去空格
        if (s[i] === ' ') continue;
        if (s[i] >= '0' && s[i] <= '9') {
            // 取有效数字
            let num = +s[i];
            while (i < s.length && s[i + 1] >= '0' && s[i + 1] <= '9') {
                num = num * 10 + +s[++i];
            }
            // 根据符号处理
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack[stack.length - 1] *= num;
                    break;
                default:
                    stack[stack.length - 1] = (stack[stack.length - 1] / num) >> 0;
                    break;
            }
        } else {
            // 符号更新
            sign = s[i];
        }
    }
    // 计算
    return stack.reduce((s, v) => s + v, 0);
};
// @lc code=end

// @test
if (describe) {
    describe('227.基本计算器-ii.js', () => {
        it('示例01', () => {
            let ans = calculate('1');
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = calculate(' 3/2 ');
            expect(ans).toBe(1);
        });
        it('示例03', () => {
            let ans = calculate('3+2*2');
            expect(ans).toBe(7);
        });
        it('示例04', () => {
            let ans = calculate(' 3+5 / 2 ');
            expect(ans).toBe(5);
        });
    });
}
