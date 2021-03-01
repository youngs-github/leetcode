/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // 动态规划
    return dp(s, p);

    // 辅助方法-dp
    function dp(s, p) {
        // 状态方程：f(i, j) = f(i-1, j-1) + match(i, j)
        // 每一个字符匹配, 均需判断p[j+1]是否是*, 如果是, 需要特殊判断p[j-1]位
        // 1、如果p[j]==='*', 此时需要判断p[j-1]位是否能与s[i]位匹配
        //   1.1、如果p[j-1]==='.', 即通配符, 故能匹配
        //   1.2、如果p[j-1]===s[i], 即有效字符, 故能匹配
        //   1.3、如果p[j-1]!==s[i], 此时不能匹配
        // 2、如果p[j]!=='*', 此时需要判断s[i]位能否与p[j]位匹配
        //   2.1、有效字符
        //   2.2、通配符'.'
        // 长度
        let m = s.length;
        let n = p.length;
        // 状态数组
        let dps = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));
        // 初始化
        dps[0][0] = true;
        // p为空, s不为空, 此时肯定不匹配, 已经填充false(dps[i][0]), 故不处理
        // s为空, p不为空, 此时仅当p[1]==='*'才可匹配, 填充(dps[0][j])
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dps[0][j] = dps[0][j - 2];
            }
        }
        // 外层循环
        for (let i = 1; i <= m; i++) {
            // 内层循环
            for (let j = 1; j <= n; j++) {
                if (p[j - 1] === '*') {
                    // j位是*, 判断s[i-1]能否匹配p[j-1], 即'aa'匹配'a*'这种
                    if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                        // s[i-1]可以匹配p[j-2]
                        dps[i][j] = dps[i][j - 2] || dps[i - 1][j - 2] || dps[i - 1][j];
                    } else {
                        // 继续取j-2位, 因为*可以匹配多次
                        dps[i][j] = dps[i][j - 2];
                    }
                } else {
                    // j+1位不是*, 判断s[i]能否匹配p[j], 即'aa'匹配'a.'这种
                    if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                        dps[i][j] = dps[i - 1][j - 1];
                    }
                }
            }
        }
        return dps[m][n];
    }
};
// @lc code=end
