/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // 暴力
    // return vi(height);
    // 动态编程
    // return dw(height);
    // 双指针
    return tp(height);
    // 辅助方法-暴力
    function vi(height) {
        // 类似中心扩散方法
        // 从该元素出发, 向其左右两侧遍历, 寻找最高元素
        // 其最大雨水量即为两侧较小元素
        let ans = 0;
        for (let i = 1; i < height.length - 1; i++) {
            let leftMax = height[i];
            let rightMax = height[i];
            // 往左侧遍历
            for (let j = i - 1; j >= 0; j--) {
                leftMax = Math.max(leftMax, height[j]);
            }
            // 往右侧遍历
            for (let j = i + 1; j < height.length; j++) {
                rightMax = Math.max(rightMax, height[j]);
            }
            // 统计结果
            ans += Math.min(leftMax, rightMax) - height[i];
        }
        return ans;
    }
    // 辅助方法-动态编程
    function dw(height) {
        // 对暴力法的优化
        // 从左往右、从右往左分别遍历
        // 将左侧元素最高值、右侧元素最高值分别进行存储
        let len = height.length;
        let lefts = new Array(len);
        let rights = new Array(len);
        // 从左到右遍历
        lefts[0] = height[0];
        for (let i = 1; i < height.length; i++) {
            lefts[i] = Math.max(lefts[i - 1], height[i]);
        }
        // 从右到左遍历
        rights[len - 1] = height[len - 1];
        for (let i = len - 2; i >= 0; i--) {
            rights[i] = Math.max(height[i], rights[i + 1]);
        }
        // 统计结果
        let ans = 0;
        for (let i = 0; i < len; i++) {
            ans += Math.min(lefts[i], rights[i]) - height[i];
        }
        return ans;
    }
    // 辅助方法-双指针
    function tp(height) {
        // 对动态编程的优化
        // 从两侧往中间遍历
        // 如果left_max < right_max, 可知左侧元素的容量可以确定(元素两侧最大值的较小者确定)
        // 如果left_max > right_max, 可知右侧元素的容量可以确定(元素两侧最大值的较小者确定)
        let ans = 0;
        let left = 0;
        let right = height.length - 1;
        let left_max = height[0];
        let right_max = height[height.length - 1];
        while (left <= right) {
            if (left_max < right_max) {
                // 两侧最大值较小者是左侧
                ans += Math.max(left_max - height[left], 0);
                left_max = Math.max(left_max, height[left]);
                left++;
            } else {
                // 两侧最大值较小者是右侧
                ans += Math.max(right_max - height[right], 0);
                right_max = Math.max(right_max, height[right]);
                right--;
            }
        }
        return ans;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('42.接雨水.js', () => {
        it('示例01', () => {
            let ans = trap([]);
            expect(ans).toBe(0);
        });
        it('示例02', () => {
            let ans = trap([4]);
            expect(ans).toBe(0);
        });
        it('示例03', () => {
            let ans = trap([1, 0, 2]);
            expect(ans).toBe(1);
        });
        it('示例04', () => {
            let ans = trap([4, 2, 0, 3, 2, 5]);
            expect(ans).toBe(9);
        });
        it('示例05', () => {
            let ans = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
            expect(ans).toBe(6);
        });
    });
}
