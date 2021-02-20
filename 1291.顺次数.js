/*
 * @lc app=leetcode.cn id=1291 lang=javascript
 *
 * [1291] 顺次数
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
	const ans = [];
	// 暴力法，不合理
	// 12-123456789，长度由2-9，遍历
    for (let i = 2; i < 10; i++) {
		for (let j = 1; j <= 10 - i; j++) {
			let n = j;
			for (let k = 2; k <= i; k++) {
				n = +(n + String(j + k - 1))
			}
			if (n >= low && n <= high) {
				ans.push(n);
			}
		}
	}
    return ans;
};
// @lc code=end
