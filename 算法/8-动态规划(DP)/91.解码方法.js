/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0;
  // 动态规划
  return dp(s);

  // 辅助方法-dp
  function dp(s) {
    // 状态方程：f(i) = f(i-1) + (是否) ? f(i-2) : 0
    // 1、当前位是0时, 需要判断前一位是否是1或2, 不满足则返回0
    // 2、前一位是1或者2时, 需要判断是否可以解码成2位数, 若可以, 满足状态方程
    // 而i位只与i-1位及i-2位相关, 故可以使用常量空间代替状态数组
    let p1 = 1;
    let p2 = 1;
    // 从第1位开始判断
    // 第0位不用判断, 因为0的情况前面已经排除
    for (let i = 1; i < s.length; i++) {
      // 暂存
      // 后续p1需要右移
      let t = p2;
      // 情况1
      if (s[i] === '0') {
        if (s[i - 1] === '1' || s[i - 1] === '2') {
          // i-1及i位只能解码成1种
          // 故此处没有新增解码类型
          p2 = p1;
        } else {
          return 0;
        }
      } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] < '7')) {
        // i-1及i位可以解码成2种类型, 满足状态方程
        p2 += p1;
      }
      // 其他情况时, 无法将i-1及i位解码成2种类型, 故只需右移
      p1 = t;
    }
    return p2;
  }
};
// @lc code=end
