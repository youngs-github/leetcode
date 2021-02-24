/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 从右到左依次相加
    // 取较短/较长
    let short = num1;
    let longer = num2;
    if (short.length > longer.length) {
        short = num2;
        longer = num1;
    }
    // 结果数组
    let ans = longer.split('');
    let rest = 0;
    for (let i = 1; i <= longer.length; i++) {
        let n1 = +short[short.length - i] || 0;
        let n2 = +longer[longer.length - i];
        // 相加
        ans[ans.length - i] = (rest + n1 + n2) % 10;
        rest = Math.floor((rest + n1 + n2) / 10);
    }
    if (rest > 0) ans.unshift(rest);
    return ans.join('');
};
// @lc code=end
