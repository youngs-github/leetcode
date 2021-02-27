/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 1、暴力法
  // return vi(s);
  // 2、动态规划
  return dp(s);
  // 3、中心扩散(center-spread)
  return cs(s);

  // 辅助方法-暴力法
  function vi(s) {
    // 依次选取从i位置到j位置的字符串
    // 判断其是否是回文
    let ans = '';
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        let ss = s.slice(i, j + 1);
        if (ss.length > ans.length && check(ss)) {
          ans = ss;
        }
      }
    }
    return ans;

    // 检测方法
    function check(s, i = 0, j = s.length - 1) {
      while (i < j) {
        if (s[i++] !== s[j--]) return false;
      }
      return true;
    }
  }
  // 辅助方法-动态规划
  function dp(s) {
    // 单个字符必定是回文
    // 若s[i]!==s[j], 其必定不是回文
    // 状态转移方程：dp(i,j) = s[i]===s[j] && dp(i+1,j-1)
    // 使用二维数组存储i,j位置是否是回文
    let ans = [0, 1];
    let dps = new Array(s.length).fill(0).map(() => new Array(s.length));
    // 只需要考虑二维数组右上角部分
    for (let j = 1; j < s.length; j++) {
      for (let i = 0; i < j; i++) {
        if (s[i] !== s[j]) {
          // s的i,j位置不等, 其必然不是回文串
          dps[i][j] = false;
        } else {
          // 相等, 判断i+1,j-1区间
          if (j - i < 3) {
            // i+1,j-1无法构成区间
            // 即i+1 === j-1, 只有一个字符
            dps[i][j] = true;
          } else {
            // 状态推算, 由i+1,j-1位置决定i,j位置
            dps[i][j] = dps[i + 1][j - 1];
          }
        }
        // 统计结果
        if (dps[i][j] && j - i + 1 > ans[1]) {
          ans[0] = i;
          ans[1] = j - i + 1;
        }
      }
    }
    return s.substr(ans[0], ans[1]);
  }
  // 辅助方法-中心扩散
  function cs(s) {
    // 每走一步, 以当前位置为中心点检测回文
    // 如果回文串中心元素个数是偶数, 需要特殊处理
    let ans = '';
    for (let i = 0; i < s.length; i++) {
      let ss = check(s, i);
      if (ss.length > ans.length) {
        ans = ss;
      }
      // 去除重复查找
      while (s[i] === s[i + 1]) {
        i++;
      }
    }
    return ans;

    // 辅助方法
    function check(s, i) {
      let left = i;
      let right = i;
      // 检测重复
      while (s[right + 1] === s[left]) {
        right++;
      }
      // 从i位置往两边扩散
      while (s[left] && s[right] && s[left] === s[right]) {
        left--;
        right++;
      }
      // 最后left及right肯定不等
      return s.slice(left + 1, right);
    }
  }
};
// @lc code=end
