/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    // 单调栈
    return st(heights);
    // 暴力法
    // return vi(heights);

    // 单调栈
    function st(heights) {
        // 维护一个单调递增栈
        // i位置的柱子比栈顶柱子高度小的时候, 不能入栈, 会打破递增规律
        // 此时将栈中所有高于i位置柱子高度的柱子出栈
        // 每出一个柱子, 计算其与剩余栈顶元素面积的最大值
        // 最后比i位置柱子高的柱子均被出栈, 形成递增单调栈
        let ans = 0;
        let stack = [];
        for (let i = 0; i < heights.length + 2; i++) {
            while ((heights[i - 1] || 0) < (heights[stack[stack.length - 1]] || 0)) {
                let top = stack.pop();
                ans = Math.max(ans, (heights[top] || 0) * (i - 1 - stack[stack.length - 1] - 1));
            }
            stack.push(i - 1);
        }
        return ans;
    }

    // 暴力法
    // 效率很低, 时间复杂度：O(n^2)
    function vi(heights) {
        if (!heights.length) return 0;
        if (heights.length < 2) return heights[0];
        let ans = heights[0];
        let len = heights.length;
        for (let i = 0; i < len - 1; i++) {
            let min = heights[i];
            for (let j = i + 1; j < len; j++) {
                // 为零时退出
                if (heights[j] === 0) {
                    break;
                } else {
                    // 计算
                    min = Math.min(min, heights[j]);
                    ans = Math.max(ans, min * (j - i + 1), heights[j]);
                }
            }
            // 去除重复
            while (heights[i + 1] === heights[i]) {
                i++;
            }
        }
        return ans;
    }
};
// @lc code=end

// test
console.log(largestRectangleArea([2]));
console.log(largestRectangleArea([3, 0]));
console.log(largestRectangleArea([3, 0, 3]));
console.log(largestRectangleArea([3, 2, 3, 1]));
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
