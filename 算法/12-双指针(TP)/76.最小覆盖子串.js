/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let min = Number.MAX_SAFE_INTEGER;
    // 使用map缓存
    let srcs = new Map();
    let start = s.length;
    let remain = 0;
    for (let i = 0; i < t.length; i++) {
        if (srcs.has(t[i])) {
            srcs.set(t[i], srcs.get(t[i]) + 1);
        } else {
            srcs.set(t[i], 1);
            // 种类
            remain++;
        }
    }
    // 双指针遍历, 先扩张右指针, 再收缩左指针
    for (let left = 0, right = 0; right < s.length; right++) {
        // 仅当需要该元素时
        if (srcs.has(s[right])) {
            let num = srcs.get(s[right]);
            if (num !== undefined) {
                // 该元素碰面, 次数减一
                srcs.set(s[right], --num);
            }
            if (num === 0) {
                // 该元素满足, 类型减一
                remain--;
            }
            // 当remain都满足时, 不断右移left指针, 计算
            while (remain === 0) {
                if (right - left + 1 < min) {
                    min = right - left + 1;
                    start = left;
                }
                // 从左侧移除s[left]
                let num = srcs.get(s[left]);
                if (num !== undefined) {
                    srcs.set(s[left], ++num);
                }
                if (num > 0) {
                    // 类型加一
                    remain++;
                }
                // 指针右移
                left++;
            }
        }
    }
    return start === s.length ? '' : s.substring(start, start + min);
};
// @lc code=end
