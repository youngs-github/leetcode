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
    // 使用O(M+N)实现
    // 如果当前为偶数个, 取i及i+1
    // 如果当前为奇数个, 取i即可
    let ans = 0;
    let lens = nums1.length + nums2.length;
    // 结果个数
    let nums = lens & 1 ? 1 : 2;
    // 中位数位置
    let mids = lens & 1 ? (lens + 1) / 2 : lens / 2;
    let i = 0;
    let j = 0;
    let k = nums;
    while (true) {
        // 判断先取谁
        if ((i < nums1.length && nums1[i] <= nums2[j]) || j >= nums2.length) {
            // nums1有剩余且小于nums2
            // nums2没有剩余
            if (--mids <= 0) {
                // 取结果
                ans += nums1[i];
                if (--k <= 0) break;
            }
            i++;
        } else {
            // nums2有剩余且小于nums1
            if (--mids <= 0) {
                // 取结果
                ans += nums2[j];
                if (--k <= 0) break;
            }
            j++;
        }
    }
    return ans / nums;
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
        it('示例06', () => {
            let ans = findMedianSortedArrays([3, 4], []);
            expect(ans).toBe(3.5);
        });
    });
}
