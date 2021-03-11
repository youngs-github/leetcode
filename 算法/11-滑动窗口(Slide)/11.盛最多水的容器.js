/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 滑动窗口法-双指针
    // 从两侧开始往内遍历
    // 前进时, 抛弃较小的板, 因为选较小的板肯定不会使总容量增加
    let ans = 0;
    let left = 0;
    let right = height.length - 1;
    while (left < right) {
        if (height[left] <= height[right]) {
            ans = Math.max(ans, height[left] * (right - left++));
        } else {
            ans = Math.max(ans, height[right] * (right-- - left));
        }
    }
    return ans;
};
// @lc code=end

// @test
if (describe) {
    describe('11.盛最多水的容器.js', () => {
        it('示例01', () => {
            let ans = maxArea([1, 1]);
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = maxArea([1, 2, 1]);
            expect(ans).toBe(2);
        });
        it('示例03', () => {
            let ans = maxArea([4, 3, 2, 1, 4]);
            expect(ans).toBe(16);
        });
        it('示例04', () => {
            let ans = maxArea([2, 3, 4, 5, 18, 17, 6]);
            expect(ans).toBe(17);
        });
        it('示例05', () => {
            let ans = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
            expect(ans).toBe(49);
        });
    });
}
