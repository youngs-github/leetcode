/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	// 动态规划
	let dps = new Array(Math.max(word1.length, word2.length));
	let i = 0;
	let j = 0;
	while (i < word1.length && j< word2.length) {
		
	}
};
// @lc code=end

