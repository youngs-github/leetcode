/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    // 整数部分
    let ints = [];
    // 小数部分
    let decs = [];
    // 指数部分
    let eees = [];
    // 取整数部分
    let i = 0;
    while (i < s.length && !isValidDot(s, i) && !isValidMin(s, i)) {
        if (!(isValidAom(s, i) || isValidNum(s, i))) {
            return false;
        }
        ints.push(s[i++]);
    }
    // 取小数部分
    if (isValidDot(s, i)) {
        decs.push(s[i++]);
        while (i < s.length && !isValidMin(s, i)) {
            if (!isValidNum(s, i)) {
                return false;
            }
            decs.push(s[i++]);
        }
    }
    // 取指数部分
    if (i < s.length) {
        if (isValidMin(s, i)) {
            eees.push(s[i++]);
            while (i < s.length) {
                if (!(isValidAom(s, i) || isValidNum(s, i))) {
                    return false;
                }
                eees.push(s[i++]);
            }
        } else {
            return false;
        }
    }
    // 还有剩余
    if (i < s.length) {
        return false;
    }
    // 验证整数, 仅包含0-9、-+
    if (ints.length) {
        // 存在正负号, 必须存在数字或者小数
        if (
            isValidAom(ints, 0) &&
            ints.length < 2 &&
            (isValidAom(decs, 1) ? decs.length < 3 : decs.length < 2)
        ) {
            return false;
        }
        for (let i = 1; i < ints.length; i++) {
            if (isValidAom(ints, i)) {
                return false;
            }
        }
    }
    // 验证小数, 包含0-9
    if (decs.length) {
        // 存在小数, 必须存在整数或者数字
        if (!ints.length && decs.length < 2) {
            return false;
        }
    }
    // 验证指数, 仅包含0-9、-+
    if (eees.length) {
        // 存在指数, 必须存在整数或小数部分
        if (!ints.length && !decs.length) {
            return false;
        }
        for (let i = 2; i < eees.length; i++) {
            if (isValidAom(eees, i)) {
                return false;
            }
        }
        // 1位是-+时, 后面必须跟数字
        // 没有-+时, 长度必须大于1
        if (isValidAom(eees, 1)) {
            if (eees.length < 3) {
                return false;
            }
        } else if (eees.length < 2) {
            return false;
        }
    }

    return true;

    // 辅助方法-验证合法
    function isValidAom(s, i) {
        return s[i] === '-' || s[i] === '+';
    }
    function isValidDot(s, i) {
        return s[i] === '.';
    }
    function isValidMin(s, i) {
        return s[i] === 'E' || s[i] === 'e';
    }
    function isValidNum(s, i) {
        return s[i] >= '0' && s[i] <= '9';
    }
};
// @lc code=end
