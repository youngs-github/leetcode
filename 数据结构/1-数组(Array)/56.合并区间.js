/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	let ans = [];
	// 排序
	// 确保最小区间有序
	intervals.sort((i1, i2) => i1[0] - i2[0]);
	// 循环
	// 依次遍历每个元素
	// 判断当前元素与后一元素是否相重叠
	let curr = intervals[0];
	for (let i = 1; i <= intervals.length; i++) {
		let next = intervals[i];
		if (next && curr[1] >= next[0]) {
			// 取最大值
			curr[0] = Math.min(curr[0], next[0]);
			curr[1] = Math.max(curr[1], next[1]);
		} else {
			// 合适, 放入结果
			ans.push(curr);
			curr = next;
		}
	}
	return ans;
};
// @lc code=end

