/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  // 排序
  // return sort(s, t);
  // hash
  return hash(s, t);

  function sort(s, t) {
    const ss = s.split('').sort();
    const tt = t.split('').sort();
    return ss.every((v, i) => v === tt[i]);
  }
  function hash(s, t) {
    const hash = new Map();
    for (let i = 0; i < s.length; i++) {
      hash.set(s[i], (hash.get(s[i]) || 0) + 1);
    }
    for (let i = 0; i < t.length; i++) {
      if (!hash.has(t[i])) {
        return false;
      }
      if (hash.get(t[i]) - 1 === 0) {
        hash.delete(t[i]);
      } else {
        hash.set(t[i], hash.get(t[i]) - 1);
      }
    }
    return hash.size === 0;
  }
};
// @lc code=end
