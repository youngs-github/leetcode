/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	// return sort(nums);
	return cand(nums);

    // 排序法
    function sort(nums) {
        // 多数元素总数一定大于一半
        // [1,1,1,1,2,2,2]的索引[3]即是
        // [1,1,1,1,1,2,2,2]的索引[3]即是
        return nums.sort((a, b) => a - b)[nums.length >> 1];
    }
    // 摩尔投票法
    function cand(nums) {
        // 开始选中第一位, 其票数为1
        let ans = nums[0];
        let count = 1;
        for (let i = 1; i < nums.length; i++) {
            if (count === 0) {
                // 票数为0, 更换选举人
                ans = nums[i];
                count = 1;
            } else {
				// 遇到支持者则加一票, 否则减一票
                count += ans === nums[i] ? 1 : -1;
            }
		}
		return ans;
    }
};
// @lc code=end
