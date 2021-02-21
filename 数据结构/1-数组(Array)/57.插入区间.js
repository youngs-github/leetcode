/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} ivls
 * @param {number[]} ivl
 * @return {number[][]}
 */
var insert = function (ivls, ivl) {
  let ans = [];
  let index = 0;
  // 先遍历左侧，入队
  while (index < ivls.length && ivl[0] > ivls[index][1]) {
    ans.push(ivls[index++]);
  }
  // 处理重叠，直接在ivl上修改
  while (index < ivls.length && ivls[index][0] <= ivl[1]) {
    ivl[0] = Math.min(ivl[0], ivls[index][0]);
    ivl[1] = Math.max(ivl[1], ivls[index][1]);
    index++;
  }
  ans.push(ivl);
  // 右侧剩余
  while (index < ivls.length) {
    ans.push(ivls[index++]);
  }
  return ans;
};
// @lc code=end
