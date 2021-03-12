/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // 动态规划
    return dp(nums);
    // 辅助方法-dp
    function dp(nums) {
        // 某个位置的最大长度, 由其前面元素的最大长度决定
        // 0-j-i遍历, 如果j位置小于i位置, 那即可以比较f(i)与f(j)+1
        // 状态方程：f(i) = max{f(j)+1, f(i)}
        let ans = 1;
        let dps = new Array(nums.length).fill(1);
        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dps[i] = Math.max(dps[i], dps[j] + 1);
                    ans = Math.max(ans, dps[i]);
                }
            }
        }
        return ans;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('300.最长递增子序列.js', () => {
        it('示例01', () => {
            let ans = lengthOfLIS([7]);
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = lengthOfLIS([7, 7, 7, 7]);
            expect(ans).toBe(1);
        });
        it('示例03', () => {
            let ans = lengthOfLIS([0, 1, 0, 3, 2, 3]);
            expect(ans).toBe(4);
        });
        it('示例04', () => {
            let ans = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
            expect(ans).toBe(4);
        });
    });
}
