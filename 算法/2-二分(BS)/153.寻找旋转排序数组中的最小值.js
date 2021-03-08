/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // 二分法
    // 可能存在旋转
    if (nums[0] < nums[nums.length - 1]) return nums[0];
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        // 边界情况, mid可能会是0
        if (nums[mid] >= nums[0]) {
            // mid在左侧有序部分
            left = mid + 1;
        } else {
            // 不重复数据
            // mid在右侧有序部分
            right = mid - 1;
        }
    }
    if (nums[left] > nums[left + 1]) {
        return nums[left + 1];
    }
    return nums[left];
};
// @lc code=end

// @test
if (describe) {
    describe('153.寻找旋转排序数组中的最小值.js', () => {
        it('示例01', () => {
            let ans = findMin([1]);
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = findMin([3, 4, 5, 1, 2]);
            expect(ans).toBe(1);
        });
        it('示例03', () => {
            let ans = findMin([4, 5, 6, 7, 0, 1, 2]);
            expect(ans).toBe(0);
        });
        it('示例04', () => {
            let ans = findMin([11, 13, 15, 17]);
            expect(ans).toBe(11);
        });
        it('示例05', () => {
            let ans = findMin([2, 1]);
            expect(ans).toBe(1);
        });
        it('示例06', () => {
            let ans = findMin([4, 5, 1, 2, 3]);
            expect(ans).toBe(1);
        });
    });
}
