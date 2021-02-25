/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let ans = [];
    // 字符映射
    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    backtrack(digits, 0, map, []);
    return ans;

    // 递归+回溯
    function backtrack(digits, index, map, stack) {
        // 完成
        if (index === digits.length) {
            if (stack.length) {
                ans.push(stack.join(''));
            }
            return;
        }
        let s = map[digits[index]];
        for (let i = 0; i < s.length; i++) {
            stack.push(s[i]);
            // 该处无需剪枝, 全量递归
            backtrack(digits, index + 1, map, stack);
            stack.pop();
        }
    }
};
// @lc code=end
