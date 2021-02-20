/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    return mark(nums);
    // 利用数组下标
    function mark(nums) {
        let Max = nums.length + 1;
        // 先将数组中负数转成N+1
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 1) {
                nums[i] = Max;
            }
        }
        // 再次遍历
        // 如果值满足1<=nums[i]<=N
        // 将i位置打上标记，即转成负值
        for (let i = 0; i < nums.length; i++) {
			// 此处取绝对值
			// 因为当前修改的索引可能是其他位置的值
			// 所以遍历到其他位置时，需要将该值取绝对值
            let k = Math.abs(nums[i]);
            if (k > 0 && k < Max) {
                nums[k - 1] = -Math.abs(nums[k - 1]);
            }
        }
        // 再次遍历
        // 如果出现大于0的值，即为缺失值
        // 如果没出现，即为Max
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }
        return Max;
    }
    // 使用排序
    function sort(nums) {
        nums.sort((a, b) => a - b);
        let i = 0;
        let prev = null;
        for (let v of nums) {
            if (v <= 0) continue;
            if (v === prev) continue;
            if (++i !== v) {
                return i;
            }
            prev = v;
        }
        return i + 1;
    }
};
// @lc code=end
