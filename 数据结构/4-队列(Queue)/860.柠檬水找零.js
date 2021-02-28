/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 分别存储5、10面值
  // 20美元面值不用存储, 因为不会拿去找零
  let stack_5 = 0;
  let stack_10 = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      // 5美元, 入队
      stack_5++;
    } else if (bills[i] === 10) {
      // 10美元, 入队, 找零
      stack_10++;
      if (!stack_5) return false;
      stack_5--;
    } else {
      // 20美元, 找零
      if (stack_10 > 0) {
        stack_10--;
        if (stack_5 > 0) {
          stack_5--;
        } else {
          return false;
        }
      } else if (stack_5 > 3) {
        stack_5 -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
