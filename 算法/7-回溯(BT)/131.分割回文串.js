/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    // 回溯
    let ans = [];
    bt(s, 0, []);
    return ans;

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
    describe('131.分割回文串.js', () => {
        it('示例01', () => {
            let ans = partition('aab');
            expect(ans.length).toBe(2);
            expect(ans[1].join()).toBe(['aa', 'b'].join());
            expect(ans[0].join()).toBe(['a', 'a', 'b'].join());
        });
    });
}
