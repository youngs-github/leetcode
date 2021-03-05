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
    // 从低到高
    // 从高到低
    let ans = 0;
    let fla = true;
    let left = 0;
    let right = 1;
    while (right < ratings.length) {
        // 先取从低到高
        if (fla) {
            // 判断是否从低到高
            if (ratings[right - 1] < ratings[right]) {
                // 满足, 继续
            } else {
                // 不满足, 计算
                let candy = 1;
                while (left < right) {
                    ans += candy;
                    if (ratings[left] < ratings[left + 1]) {
                        // 左侧更低
                        candy++;
                    }
                    left++;
                }
                // ans
                ans = ans === 0 ? 1 : ans;
                // 指针右移
                fla = false;
                left = right;
            }
            right++;
        } else {
            // 判断是否从高到低
            if (ratings[right - 1] >= ratings[right]) {
                // 满足, 继续
            } else {
                // 不满足, 计算
                let candy = 2;
                let index = right + 1;
                while (left < index) {
                    ans += candy;
                    if (ratings[left] > ratings[left + 1]) {
                        // 左侧更大
                        candy++;
                    }
                    index--;
                }
                // 指针右移
                fla = true;
                left = right;
            }
            right++;
        }
    }
    return ans;
};
// @lc code=end

// @test
if (describe) {
    describe('135.分发糖果.js', () => {
        // it('示例01', () => {
        //     let ans = candy([]);
        //     expect(ans).toBe(0);
        // });
        // it('示例02', () => {
        //     let ans = candy([1]);
        //     expect(ans).toBe(1);
        // });
        it('示例03', () => {
            let ans = candy([1, 2, 2]);
            expect(ans).toBe(4);
        });
        // it('示例04', () => {
        //     let ans = candy([1, 0, 2]);
        //     expect(ans).toBe(5);
        // });
    });
}
