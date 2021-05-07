/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 动态规划
  //   return dp(nums);
  // 贪心 + 二分
  return gd(nums);
  // 辅助方法-dp
  function dp(nums) {
    // 某个位置的最大长度, 由其前面元素的最大长度决定
    // 0-j-i遍历, 如果j位置小于i位置, 那即可以比较f(i)与f(j)+1
    // 状态方程：f(i) = max{f(j)+1, f(i)}
    let ans = 1;
    let dps = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dps[i] = Math.max(dps[i], dps[j] + 1);
        }
      }
      ans = Math.max(ans, dps[i]);
    }
    return ans;
  }
  // 辅助方法-greedy
  function gd(nums) {
    let ans = 1;
    let que = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      if (que[que.length - 1] < nums[i]) {
        // 末尾值较小则追加
        que.push(nums[i]);
      } else {
        // 末尾值较大则向前替换, 不改变原有数组长度
        // 不使用二分也可以
        // let j = que.length - 1;
        // while (j >= 0 && que[j] >= nums[i]) {
        //   j--;
        // }
        // que[++j] = nums[i];
        let j = bs(que, nums[i]);
        que[j] = nums[i];
      }
      ans = Math.max(ans, que.length);
    }
    return ans;

    // 二分法
    function bs(nums, tar) {
      let left = 0;
      let right = nums.length - 1;
      while (left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] < tar) {
          left = mid + 1;
        } else if (nums[mid] > tar) {
          right = mid - 1;
        } else {
          return mid;
        }
      }
      return left;
    }
  }
};
// @lc code=end

// @test
if (describe) {
  describe('300.最长递增子序列.js', () => {
    it('示例01', () => {
      let ans = lengthOfLIS([7]);
      expect(ans).toBe(1);
    });
    it('示例02', () => {
      let ans = lengthOfLIS([7, 7, 7, 7]);
      expect(ans).toBe(1);
    });
    it('示例03', () => {
      let ans = lengthOfLIS([0, 1, 0, 3, 2, 3]);
      expect(ans).toBe(4);
    });
    it('示例04', () => {
      let ans = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
      expect(ans).toBe(4);
    });
    it('示例05', () => {
      let ans = lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]);
      expect(ans).toBe(6);
    });
  });
}
