/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
	// 分三块处理
	// 左侧小于插入区间
	// 中间存在重叠区域
	// 右侧大于插入区间
	let ans = [];
	let index = 0;
	while (index < intervals.length) {
		if (intervals[index][1] < newInterval[0]) {
			ans.push(intervals[index++]);
		} else {
			break;
		}
	}
	// 中间重叠区域
	while (index < intervals.length) {
		if (newInterval[1] >= intervals[index][0]) {
			newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
			newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
			index++;
		} else {
			break;
		}
	}
	ans.push(newInterval);
	while (index < intervals.length) {
		ans.push(intervals[index++]);
	}
	return ans;
};
// @lc code=end

