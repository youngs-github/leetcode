/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (!nums.length) return false;
    // 很多种方法
    // 排序后判断相邻
    // 利用map/set实现
	// 使用堆排序进行判断
	let set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.add(nums[i]).size !== i + 1) return true;
	}
	return false;
};
// @lc code=end
