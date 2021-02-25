/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
	// 回溯法
	let ans = [];
	backstack(ans, k, n, 1, 0, []);
	return ans;

	// 辅助方法
	function backstack(ans, k, n, i, sum, stack) {
		// 完成
		if (sum === n && stack.length === k) {
			ans.push([...stack]);
		}
		// 超过
		if (sum >= n) return;
		// 递归
		for (let j = i; j < 10; j++) {
			stack.push(j);
			backstack(ans, k, n, j + 1, sum + j, stack);
			stack.pop();
		}
	}
};
// @lc code=end

