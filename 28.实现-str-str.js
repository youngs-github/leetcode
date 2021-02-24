/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    if (!haystack) return -1;
    // 双指针
	let i = 0;
	let j = 0;
	// PMT数组
	let next = [];
    // KMP算法
    while (i < haystack.length && j < needle.length) {
		if (j === -1 || haystack[i] === needle[j]) {
			i++;
			j++;
		} else {
			// j左移
			// 直到能匹配或者-1
			j = getNext(j);
		}
	}
	// 匹配时, i多走了j位
	return j === needle.length ? i - j : -1;

	// 辅助方法
	function getNext(index) {
		if (next.length) return next[index];
		// 初始化pmt数组
		// abababcd
		//  abababcd
		// 依次寻找能匹配的下标
		let i = 0;
		let j = -1;
		// 初始位
		next[0] = -1;
		while (i < needle.length) {
			// 第一位错开
			// 该位能匹配
			if (j === -1 || needle[i] === needle[j]) {
				// 右移
				i++;
				j++;
				// i位对应j
				next[i] = j;
			} else {
				// 不断回退j
				// 直到能匹配或者j变成-1
				j = next[j];
			}
		}
		return next[index];
	}
};
// @lc code=end
