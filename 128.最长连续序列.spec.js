/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    // 借助基数排序
    return sort(nums);

    // 辅助方法-基数排序
    function sort(nums) {
        // 遍历, 取出最大最小长度
        let min = Number.MAX_SAFE_INTEGER;
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < nums.length; i++) {
            min = Math.min(min, nums[i]);
            max = Math.max(max, nums[i]);
        }
        // 取长度
        let maxLen = Math.max(min.toString().length, max.toString().length);
        // 桶数量
        let buckets = new Array(20).fill(0).map(() => []);
        // 放入桶
        for (let i = 0, dev = 1, mod = 10; i < maxLen; i++, dev *= 10, mod *= 10) {
            // 循环元素
            for (let j = 0; j < nums.length; j++) {
                // 取第maxLen-i-1位数字
                buckets[(((nums[j] % mod) / dev) >> 0) + 10].push(nums[j]);
            }
            // 放回原数组
            let index = nums.length;
            for (let j = buckets.length - 1; j >= 0; j--) {
                while (buckets[j].length) {
                    nums[--index] = buckets[j].pop();
                }
            }
        }
        // 访问
        let ans = 0;
        let pre = 0;
        let sam = 0;
        for (let i = 1; i <= nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                // 元素相同, 取一次
                sam++;
            }
            if (nums[i] !== nums[pre] + i - pre - sam) {
                ans = Math.max(ans, i - pre - sam);
                pre = i;
                sam = 0;
            }
        }
        return ans;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('128.最长连续序列.js', () => {
        // it('示例01', () => {
        //     let ans = longestConsecutive([]);
        //     expect(ans).toBe(0);
        // });
        // it('示例02', () => {
        //     let ans = longestConsecutive([1]);
        //     expect(ans).toBe(1);
        // });
        // it('示例03', () => {
        //     let ans = longestConsecutive([100, 4, 200, 1, 3, 2]);
        //     expect(ans).toBe(4);
        // });
        // it('示例04', () => {
        //     let ans = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
        //     expect(ans).toBe(9);
        // });
        // it('示例05', () => {
        //     let ans = longestConsecutive([0, -1]);
        //     expect(ans).toBe(2);
        // });
        // it('示例06', () => {
        //     let ans = longestConsecutive([0, -1, 1, 2, -3, -2]);
        //     expect(ans).toBe(6);
        // });
        it('示例07', () => {
            let ans = longestConsecutive([1, 2, 0, 1]);
            expect(ans).toBe(3);
        });
    });
}
