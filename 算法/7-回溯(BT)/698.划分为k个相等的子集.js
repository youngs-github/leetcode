/*
 * @lc app=leetcode.cn id=698 lang=javascript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    // 回溯法
    let sum = nums.reduce((s, v) => s + v, 0) / k;
    // 带有小数
    if (sum !== sum >> 0) return false;
    // 排序, 利于剪枝
    nums.sort((a, b) => b - a);
    // 已访问
    let used = new Array(nums.length).fill(false);
    // 桶数组
    let buckets = new Array(k).fill(0);
    let ans = false;
    dfs(0);
    return ans;

    // 辅助方法-dfs
    function dfs(index) {
        // 已完成
        if (ans) return;
        if (index >= k) {
            return (ans = true);
        }
        // 遍历
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            // 存在大于均值的数
            if (nums[i] > sum) return false;
            if (nums[i] + buckets[index] > sum) continue;
            // 满足
            used[i] = true;
            buckets[index] += nums[i];
            dfs(buckets[index] === sum ? index + 1 : index);
            // 重置
            used[i] = false;
            buckets[index] -= nums[i];
        }
    }
};
// @lc code=end

// @test
if (describe) {
    describe('698.划分为k个相等的子集.js', () => {
        it('示例01', () => {
            let ans = canPartitionKSubsets([1], 1);
            expect(ans).toBe(true);
        });
        it('示例02', () => {
            let ans = canPartitionKSubsets([1, 2], 2);
            expect(ans).toBe(false);
        });
        it('示例03', () => {
            let ans = canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4);
            expect(ans).toBe(true);
        });
        it('示例04', () => {
            let ans = canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 3);
            expect(ans).toBe(false);
        });
        it('示例05', () => {
            let ans = canPartitionKSubsets(
                [129, 17, 74, 57, 1421, 99, 92, 285, 1276, 218, 1588, 215, 369, 117, 153, 22],
                3
            );
            expect(ans).toBe(true);
        });
        it('示例06', () => {
            let ans = canPartitionKSubsets(
                [98, 102, 9, 36, 57, 44, 30, 35, 28, 9851, 90, 29, 9751, 44, 66, 9652],
                8
            );
            expect(ans).toBe(false);
        });
        it('示例07', () => {
            let ans = canPartitionKSubsets(
                [15, 3557, 42, 3496, 5, 81, 34, 95, 9, 81, 42, 106, 71],
                11
            );
            expect(ans).toBe(false);
        });
    });
}
