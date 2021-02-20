/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} ivls
 * @param {number[]} ivl
 * @return {number[][]}
 */
var insert = function (ivls, ivl) {
	let mini;
	let maxi;
    // 遍历
    for (let i = 0; i < ivls.length; i++) {
        // 左侧存在交集
        if (ivls[i][0] <= ivl[0] || ivls[i][1] >= ivl[0]) {
			
        }
    }
    return ivls;
};
// @lc code=end
