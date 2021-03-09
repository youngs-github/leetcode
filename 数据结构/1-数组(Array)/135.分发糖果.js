/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    // 两次遍历
    // return two(ratings);
    // 一次遍历
    return one(ratings);

    // 辅助方法-两次遍历
    function two(nums) {
        // 条件1：从左到右遍历一次, 如果分数大于前一分数, 则将其在前一糖果基础上+1
        // 条件2：从右到左遍历一次, 如果分数大于后一分数, 则将其在后一糖果基础上+1
        // 最终, 某位置糖果需满足条件1及条件2, 故取二者最大值
        let ans = 0;
        let len = nums.length;
        let lefts = new Array(len).fill(1);
        let rights = new Array(len).fill(1);
        for (let i = 1; i < len; i++) {
            if (nums[i] > nums[i - 1]) {
                lefts[i] = lefts[i - 1] + 1;
            }
        }
        for (let i = len - 1; i >= 0; i--) {
            if (nums[i] > nums[i + 1]) {
                rights[i] = rights[i + 1] + 1;
            }
            ans += Math.max(lefts[i], rights[i]);
        }
        return ans;
    }
    // 辅助方法-一次遍历
    function one(nums) {
        let n = nums.length;
        let ret = 1;
        let inc = 1,
            dec = 0,
            pre = 1;

        for (let i = 1; i < n; i++) {
            if (nums[i] >= nums[i - 1]) {
                dec = 0;
                if (nums[i] === nums[i - 1]) pre = 1;
                else pre++;
                ret += pre;
                inc = pre;
            } else {
                dec++;
                if (dec === inc) {
                    dec++;
                }
                ret += dec;
                pre = 1;
            }
        }
        return ret;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('135.分发糖果.js', () => {
        it('示例01', () => {
            let ans = candy([1]);
            expect(ans).toBe(1);
        });
        it('示例02', () => {
            let ans = candy([1, 2, 2]);
            expect(ans).toBe(4);
        });
        it('示例03', () => {
            let ans = candy([1, 0, 2]);
            expect(ans).toBe(5);
        });
    });
}
