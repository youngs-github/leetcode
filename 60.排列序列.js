/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
	return math(n, k);
    // 计算法
    function math(n, k) {
        let ans = [];
        let sums = [1];
        let used = new Array(n).fill(0).map((v, i) => i + 1);
        for (let i = 2; i < n; i++) {
            sums.push(sums[i - 2] * i);
        }
        // 遍历
        for (let i = 1; i <= n; i++) {
            // 取位
            let t = 1;
            // 按位比较
            let j = sums.length - i;
            if (k >= sums[j]) {
                // 该位有效
                // 若恰好相等, 表明是最后一个, 否则需要进一
                t = Math.floor(k / sums[j]) + (k % sums[j] === 0 ? 0 : 1);
                k = k % sums[j];
            }
            // 取used
            for (let k = 0, s = 0; k < n; k++) {
                if (used[k]) {
                    if (++s === t) {
                        // 放入数组
                        ans.push(used[k]);
                        used[k] = false;
                    }
                }
            }
        }
        return ans.join('');
    }
    // 回溯法
    function backtrack() {
        let ans = [];
        recur(ans, n, k, 1, []);
        return ans[k - 1];

        // 辅助方法
        function recur(ans, n, k, i, stack) {
            // 完成
            if (i - 1 === n) {
                return ans.push(stack.join(''));
            }
            // 超过
            if (i > n || ans.length >= k) return;
            // 递归
            for (let j = 1; j <= n; j++) {
                if (!stack.includes(j)) {
                    stack.push(j);
                    recur(ans, n, k, i + 1, stack);
                    stack.pop();
                }
            }
        }
    }
};
// @lc code=end
