/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	// 无重复元素
	// 某侧出现了较大元素, 则其必定会有峰值元素
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
// @lc code=end

// @test
if (describe) {
    describe('162.寻找峰值.js', () => {
        it('示例01', () => {
            let ans = findPeakElement([1, 2, 3, 1]);
            expect(ans).toBe(2);
        });
        it('示例02', () => {
            let ans = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
            expect(ans).toBe(5);
        });
    });
}
