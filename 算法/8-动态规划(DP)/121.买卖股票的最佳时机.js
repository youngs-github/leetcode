/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 动态规划
  return dp(prices);
  // 暴力方法
  // return vi(prices);

  // 辅助方法-dp
  function dp(prices) {
    // f(0) = 0
    // f(1) = 0
    // f(2) = max(prices[1]-prices[0], 0)
    // 状态方程：f(i) = max(f(i-1), prices[i]-minprice)
    let dps = [0];
    let mps = prices[0];
    for (let i = 1; i < prices.length; i++) {
      mps = Math.min(mps, prices[i]);
      dps[i] = Math.max(dps[i - 1], prices[i] - mps);
    }
    return dps[prices.length - 1];
  }
  // 辅助方法-vi-超时
  function vi(prices) {
    let ans = 0;
    for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        ans = Math.max(ans, prices[j] - prices[i]);
      }
    }
    return ans;
  }
};
// @lc code=end
