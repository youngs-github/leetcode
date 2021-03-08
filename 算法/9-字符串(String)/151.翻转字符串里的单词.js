/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let ans = '';
    let index = 0;
    while (index < s.length) {
        // 去除前空格
        while (s[index] === ' ' && index <= s.length) {
            index++;
        }
        // 下标越界, 结束
        if (index >= s.length) break;
        // 取单词元素
        let start = index;
        while (s[index] !== ' ' && index <= s.length) {
            index++;
        }
        ans = s.slice(start, index++) + (ans.length === 0 ? '' : ' ' + ans);
    }
    return ans;
};
// @lc code=end

// @test
if (describe) {
    describe('151.翻转字符串里的单词.js', () => {
        it('示例01', () => {
            let ans = reverseWords('the sky is blue');
            expect(ans).toBe('blue is sky the');
        });
        it('示例02', () => {
            let ans = reverseWords('  hello world!  ');
            expect(ans).toBe('world! hello');
        });
        it('示例03', () => {
            let ans = reverseWords('a good   example');
            expect(ans).toBe('example good a');
        });
        it('示例04', () => {
            let ans = reverseWords('  Bob    Loves  Alice   ');
            expect(ans).toBe('Alice Loves Bob');
        });
        it('示例05', () => {
            let ans = reverseWords('Alice does not even like bob');
            expect(ans).toBe('bob like even not does Alice');
        });
    });
}
