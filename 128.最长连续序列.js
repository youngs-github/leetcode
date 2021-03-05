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
    // 借助obj
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            obj1[-nums[i]] = 1;
        } else {
            obj2[nums[i]] = 1;
        }
    }
	// 统计负数
	let ans1 = 0;
	let pre1, val1;
    Object.keys(obj1).reverse().forEach((k, i) => {
        if (i !== 0) {
            // 正常遍历
            // pre指向前一次相邻key
            // val指向前一次相邻key的索引index
            if (k - pre1 === i - val1) {
                // 连续
                ans1 = Math.max(ans1, k - pre1 + 1);
            } else {
                // 不连续
                pre1 = k;
                val1 = i;
            }
        } else {
            ans1 = 1;
            pre1 = k;
            val1 = i;
        }
    });
	// 统计正数
    let ans2 = 0;
    let pre2, val2;
    Object.keys(obj2).reverse().forEach((k, i) => {
        if (i !== 0) {
            // 正常遍历
            // pre指向前一次相邻key
            // val指向前一次相邻key的索引index
            if (k - pre2 === i - val2) {
                // 连续
                ans2 = Math.max(ans2, k - pre2 + 1);
            } else {
                // 不连续
                pre2 = k;
                val2 = i;
            }
        } else {
            ans2 = 1;
            pre2 = k;
            val2 = i;
        }
	});
	// 相接
	// if (pre1 === 0 && )
    return [ans1, ans2];
};
// @lc code=end

// @test
if (describe) {
    describe('128.最长连续序列.js', () => {
        // it('示例01', () => {
        //     let ans = longestConsecutive([]);
        //     expect(ans).toBe(0);
        // });
        // it('示例01', () => {
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
        it('示例06', () => {
            let ans = longestConsecutive([0, -1, 1, 2, -3, -2]);
            expect(ans).toBe(6);
        });
    });
}
