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
    // 暴力法
    // return vi(height);
    // 动态编程
    // return dw(height);
    // 双指针
    return tp(height);

    // 辅助方法-暴力法
    function vi(height) {
        // 类似中心扩散法
        // 每一块能容纳水的板等于其左右最高板中较短的
        // 从每一块开始, 分别向左、向右进行扫描, 统计每块的结果
        let ans = 0;
        for (let i = 1; i < height.length - 1; i++) {
            let max_left = height[i];
            let max_right = height[i];
            // 向左扫描
            for (let j = i - 1; j >= 0; j--) {
                max_left = Math.max(max_left, height[j]);
            }
            // 向右扫描
            for (let j = i + 1; j < height.length; j++) {
                max_right = Math.max(max_right, height[j]);
            }
            // 统计结果
            ans += Math.min(max_left, max_right) - height[i];
        }
        return ans;
    }
    // 辅助方法-动态编程
    function dw(height) {
        // 暴力法中, 每个板均需要向左、向右扫描左右侧最高板
        // 此处, 可以利用数组存储其左右侧最高板, 分别从左侧、右侧开始扫描
        // 最后, 统计
        let ans = 0;
        let len = height.length;
        let max_lefts = new Array(len);
        let max_rights = new Array(len);
        // 扫描左侧
        max_lefts[0] = height[0];
        for (let i = 1; i < len - 1; i++) {
            max_lefts[i] = Math.max(height[i], max_lefts[i - 1]);
        }
        // 扫描右侧
        max_rights[len - 1] = height[len - 1];
        for (let i = len - 2; i >= 0; i--) {
            max_rights[i] = Math.max(height[i], max_rights[i + 1]);
        }
        // 统计结果
        for (let i = 1; i < len - 1; i++) {
            ans += Math.min(max_lefts[i], max_rights[i]) - height[i];
        }
        return ans;
    }
    // 辅助方法-双指针
    function tp(height) {
        let ans = 0;
        let left = 0;
        let right = height.length - 1;
        let left_max = 0;
        let right_max = 0;
        // 循环
        while (left < right) {
            if (height[left] <= height[right]) {
                // 左侧板较短, 形成的桶中可以用作最短板
                if (height[left] < left_max) {
                    // 当前板较短, 可以进行计算
                    ans += left_max - height[left];
                } else {
                    // 当前板更高, 替换左侧最高板
                    left_max = height[left];
                }
                // 指针右移
                left++;
            } else {
                // 右侧板较短, 形成的桶中可以用作最短板
                if (height[right] < right_max) {
                    // 当前板较短, 进行计算
                    ans += right_max - height[right];
                } else {
                    // 当前板更高, 替换右侧最高板
                    right_max = height[right];
                }
                // 指针左移
                right--;
            }
        }
        return ans;
    }
};
// @lc code=end
