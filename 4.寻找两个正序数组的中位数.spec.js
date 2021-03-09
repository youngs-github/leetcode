/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // O(lgM+N)较难实现, 使用O(M+N)
    let i = 0;
    let j = 0;
    let k = 0;
    let len = Math.floor((nums1.length + nums2.length) / 2);
    while (k <= len) {
        if (nums1[i] <= nums2[j]) {
            i++;
            if (++k >= len) return nums1[i];
        } else {
            j++;
            if (++k >= len) return nums1[i];
        }
    }
    return 0;
};
// @lc code=end

// @test
if (describe) {
    describe('4.寻找两个正序数组的中位数.js', () => {
        it('示例01', () => {
            let ans = findMedianSortedArrays([], [1]);
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = findMedianSortedArrays([2], []);
            expect(ans).toBe(2);
        });
        it('示例03', () => {
            let ans = findMedianSortedArrays([1, 3], [2]);
            expect(ans).toBe(2);
        });
        it('示例04', () => {
            let ans = findMedianSortedArrays([1, 2], [3, 4]);
            expect(ans).toBe(2.5);
        });
        it('示例05', () => {
            let ans = findMedianSortedArrays([0, 0], [0, 0]);
            expect(ans).toBe(0);
        });
    });
}
