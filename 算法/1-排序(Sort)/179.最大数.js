/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
	// 按照数字的ascii码排序
	// 偶然想到, 题解也一样
	let ans = nums.sort((a, b) => {
		// 比较字符串
		let ab = a + '' + b;
		let ba = b + '' + a;
		// a较大
		if (ab > ba) return -1;
		// b较大
		if (ab < ba) return 1;
		return 0;
	}).join('');
	return ans[0] === '0' ? '0' : ans;
};
// @lc code=end

