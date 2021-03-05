/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    // 回溯
    let ans = [];
	bt(s, 0, []);
	ans.sort((a, b) => a.length - b.length);
    return ans.length ? ans[0].length - 1 : 0;

    // 辅助方法-回溯
    function bt(s, start, stack) {
        // 结束
        if (start >= s.length) {
            return ans.push([...stack]);
        }
        // 单个
        stack.push(s[start]);
        bt(s, start + 1, stack);
        stack.pop();
        // 循环
        for (let i = start + 1; i < s.length; i++) {
            if (isValid(s, start, i)) {
                stack.push(s.slice(start, i + 1));
                bt(s, i + 1, stack);
                stack.pop();
            }
        }
    }
    // 辅助方法-回文
    function isValid(s, i, j) {
        while (i < j) {
            if (s[i++] !== s[j--]) return false;
        }
        return true;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('132.分割回文串-ii.js', () => {
        it('示例01', () => {
            let ans = partition('aab');
            expect(ans.length).toBe(1);
        });
    });
}
