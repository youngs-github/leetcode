/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // 栈
    return calc(s);
    // 投机
    // return eval(s);

    // 辅助方法-栈
    function calc(s) {
        // 栈
        // 符号数组+结果数组
        // 符号数组存储当前结果的正负号
        let ans = 0;
        let sig = 1;
        let signs = [];
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            // 去空格
            if (s[i] === ' ') continue;
            if (s[i] === '(') {
                // 左括号, 先暂存当前结果, 再开启新一轮计算
                signs.push(sig);
                stack.push(ans);
                ans = 0;
                sig = 1;
            } else if (s[i] === ')') {
                // 右括号, 内部计算完毕, 更新外部
                ans = ans * signs.pop() + stack.pop();
            } else if (s[i] === '+') {
                // 正号
                sig = 1;
            } else if (s[i] === '-') {
                // 负
                sig = -1;
            } else {
                // 数字
                let num = +s[i];
                // 十进制
                while (i < s.length && s[i + 1] >= '0' && s[i + 1] <= '9') {
                    num = num * 10 + +s[++i];
                }
                // 累加, 带上符号
                ans += sig * num;
            }
        }
        return ans;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('224.基本计算器.js', () => {
        it('示例-01', () => {
            let ans = calculate('1');
            expect(ans).toBe(1);
        });
        it('示例-02', () => {
            let ans = calculate('1+1');
            expect(ans).toBe(2);
        });
        it('示例-03', () => {
            let ans = calculate('1 + 1');
            expect(ans).toBe(2);
        });
        it('示例-04', () => {
            let ans = calculate(' 2-1 + 2 ');
            expect(ans).toBe(3);
        });
        it('示例-05', () => {
            let ans = calculate('(1+(4+5+2)-3)+(6+8)');
            expect(ans).toBe(23);
        });
        it('示例-06', () => {
            let ans = calculate('2147483647');
            expect(ans).toBe(2147483647);
        });
        it('示例-07', () => {
            let ans = calculate('-2+ 1');
            expect(ans).toBe(-1);
        });
        it('示例-08', () => {
            let ans = calculate('    99  ');
            expect(ans).toBe(99);
        });
        it('示例-09', () => {
            let ans = calculate('1-(+1+1)');
            expect(ans).toBe(-1);
        });
        it('示例-10', () => {
            let ans = calculate('(5-(1+(5)))');
            expect(ans).toBe(-1);
        });
    });
}
