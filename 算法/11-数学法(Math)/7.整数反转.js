/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ans = 0;
    let min = -(2 ** 31);
    let max = 2 ** 31 - 1;
    while (x !== 0) {
        let tmp = x % 10;
        // 值越界
        // 当前ans大于max/10时, 越界
        // 当前ans等于max/10且tmp>7时, 越界
        // 当前ans小于-max/10时, 越界
        // 当前ans等于-max/10且tmp<-8时, 越界
        if (ans > max / 10 || (ans === max / 10 && tmp > 7)) return 0;
        if (ans < min / 10 || (ans === min / 10 && tmp < -8)) return 0;
        // 计算结果
        ans = ans * 10 + tmp;
        x = (x / 10) >> 0;
    }
    return ans;
};
// @lc code=end
