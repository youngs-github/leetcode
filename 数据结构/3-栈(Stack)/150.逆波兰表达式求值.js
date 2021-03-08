/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // 栈
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            // 计算
            let n2 = stack.pop();
            let n1 = stack.pop();
            if (tokens[i] === '+') {
                // 加法
                stack.push(n1 + n2);
            }
            if (tokens[i] === '-') {
                // 减法
                stack.push(n1 - n2);
            }
            if (tokens[i] === '*') {
                // 乘法
                stack.push(n1 * n2);
            }
            if (tokens[i] === '/') {
                // 除法
                // 负数除法可能要往前进位
                stack.push((n1 / n2) >> 0);
            }
        } else {
            // 入栈
            stack.push(+tokens[i]);
        }
    }
    return stack[0] || 0;
};
// @lc code=end

// @test
if (describe) {
    describe('150.逆波兰表达式求值.js', () => {
        it('示例01', () => {
            let ans = evalRPN(['2', '1', '+', '3', '*']);
            expect(ans).toBe(9);
        });
        it('示例02', () => {
            let ans = evalRPN(['4', '13', '5', '/', '+']);
            expect(ans).toBe(6);
        });
        it('示例03', () => {
            let ans = evalRPN([
                '10',
                '6',
                '9',
                '3',
                '+',
                '-11',
                '*',
                '/',
                '*',
                '17',
                '+',
                '5',
                '+'
            ]);
            expect(ans).toBe(22);
        });
    });
}
