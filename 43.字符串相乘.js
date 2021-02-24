/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    // 结果数组
    let ans = new Array(num1.length + num2.length);
    // 循环相乘
    for (let i = 1; i <= num1.length; i++) {
        let n1 = +num1[num1.length - i];
        // 进位余数
        let rest = 0;
        // 逐位相乘
        for (let j = 1; j <= num2.length; j++) {
            let n2 = +num2[num2.length - j];
            // 相乘
            let res = rest + n1 * n2;
            // 后续补0
            ans[ans.length - i] = (ans[ans.length - i] || 0) + (res % 10);
            rest = Math.floor(res / 10);
        }
        // 前一位
        if (rest > 0) {
            ans[ans.length - i - j] = (ans[ans.length - i - j] || 0) + rest;
        }
    }
    return ans.join('');
};
// @lc code=end
