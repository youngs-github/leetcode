/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 不重复, 排序
    nums.sort((a, b) => a - b);
    // 暴力法O(N^3), 超时
    // 双循环+双指针
    let ans = [];
    // 外层循环
    for (let i = 0; i < nums.length; i++) {
        // 初始即大于0
        if (nums[i] > 0) break;
        // 去除相邻重复
        // 第一次执行完之后, i必须换成不同元素, 否则会重复
        if (nums[i] === nums[i - 1]) continue;
        // 内存循环
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            // 判断1、2和
            if (nums[i] + nums[left] > 0) break;
            // 计数
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                // left指针右移
                let l = nums[left];
                while (nums[++left] === l) {}
            } else if (sum > 0) {
                // right指针左移
                let r = nums[right];
                while (nums[--right] === r) {}
            } else {
                // 匹配
                ans.push([nums[i], nums[left], nums[right]]);
                // 指针
                let l = nums[left];
                while (nums[++left] === l) {}
                let r = nums[right];
                while (nums[--right] === r) {}
            }
        }
    }
    return ans;
};
// @lc code=end
