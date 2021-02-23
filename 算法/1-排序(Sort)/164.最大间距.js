/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
    if (nums.length < 2) return 0;
    // 基数排序
    // radixSort(nums);
    // 桶排序
    bucketSort(nums);
    // 再次遍历
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i + 1] - nums[i]);
    }
    return max;

    // 辅助方法-基数排序
    function radixSort(nums) {
        // 针对数字的每一位进行排序
        // 找出最长位
        // 新建10个桶
        // 遍历数组, 按位数字将元素放入桶中
        // 每一位排序完后放回原数组中
        // 循环, 直至最高位
        // 结束
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
        }
        // 取长度
        let maxDigit = String(max).length;
        let buckets = new Array(10);
        // 遍历位
        for (let i = 0, mod = 10, dev = 1; i < maxDigit; i++, mod *= 10, dev *= 10) {
            // 遍历数组
            for (let j = 0; j < nums.length; j++) {
                // 先取余再整除
                // mod始终是dev的10倍
                let digit = Math.floor((nums[j] % mod) / dev);
                if (!buckets[digit]) buckets[digit] = [];
                // 放入数组
                buckets[digit].push(nums[j]);
            }
            // 放回原数组
            let index = 0;
            for (let j = 0; j < buckets.length; j++) {
                if (buckets[j]) {
                    // 从前往后放, 每一位已经有序
                    for (let k = 0; k < buckets[j].length; k++) {
                        nums[index++] = buckets[j][k];
                    }
                    buckets[j].length = 0;
                }
            }
        }
    }
    // 辅助方法-桶排序
    function bucketSort(nums) {
        // 针对区间确定桶, 将元素放入桶并单独排序, 最后放回原数组
        // 取最大最小值
        let min = nums[0];
        let max = nums[0];
        for (let i = 0; i < nums.length; i++) {
            min = Math.min(min, nums[i]);
            max = Math.max(max, nums[i]);
        }
        // 确定桶数量
        let delta = Math.floor(Math.sqrt(max - min));
        let buckets = new Array(delta + 1);
        // 逐个放入桶
        // 并且排序桶
        for (let i = 0; i < nums.length; i++) {
            let digit = Math.floor((nums[i] - min) / delta);
            if (!buckets[digit]) buckets[digit] = [];
            buckets[digit].push(nums[i]);
        }
        // 排序桶
        // 放回原数组
        let index = 0;
        for (let i = 0; i < buckets.length; i++) {
            if (buckets[i]) {
                buckets[i].sort((a, b) => a - b);
                // 从左到右
                for (let j = 0; j < buckets[i].length; j++) {
                    nums[index++] = buckets[i][j];
                }
            }
        }
    }
};
// @lc code=end
