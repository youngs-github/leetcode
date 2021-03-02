/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	// 贪心算法
	// 维护一个最远可以到达的max变量
	// 如果当前下标i大于max变量, 表示该下标不可到达, 结束
	let max = 0;
    for (let i = 0; i < nums.length; i++) {
		if (max < i) {
			// 左侧到不了
			return false;
		}
		max = Math.max(max, i + nums[i]);
    }
    return true;
};
// @lc code=end
