/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    // 暴力
    return vi(s);
    // 辅助方法-暴力
    function vi(s) {
        let ans = 0;
        // 双重循环
        for (let i = 0; i < s.length; i++) {
            // 剪枝
            if (s[i] === '(') {
                // 循环完毕时, 将有效的j值赋给i, 即i-j之间有效
                let tmp = i;
                let left = 1;
                let right = 0;
                for (let j = i + 1; j < s.length; j++) {
                    if (s[j] === ')') {
                        // 右括号, 判断是否有左括号
                        if (left > 0) {
                            if (--left === 0) {
                                // 刚好有效
                                ans = Math.max(ans, j - i + 1);
                                tmp = j;
                            }
                        } else {
                            // 无效
                            break;
                        }
                    } else {
                        // 左括号
                        left++;
                    }
                }
                // 结束
                // 判断左右括号是否为空
                if (left === 0 && right === 0 && tmp > i) {
                    ans = Math.max(ans, tmp - i + 1);
                }
                // 改变i的值
                i = tmp;
            }
        }
        return ans;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('32.最长有效括号.js', () => {
        it('示例01', () => {
            let ans = longestValidParentheses('');
            expect(ans).toBe(0);
        });
        it('示例02', () => {
            let ans = longestValidParentheses('(()');
            expect(ans).toBe(2);
        });
        it('示例03', () => {
            let ans = longestValidParentheses(')()())');
            expect(ans).toBe(4);
        });
    });
}
