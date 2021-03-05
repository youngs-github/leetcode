/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 考察排序算法
  // 快排
  // return qs(nums, k);
  // 堆排序
  return hs(nums, k);
  // 库排序
  // return vi(nums, k);

  // 辅助方法-快速排序
  function qs(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    let target = nums.length - k;
    // 循环进行排序
    while (true) {
      let pivot = partition(nums, left, right);
      if (pivot < target) {
        left = pivot + 1;
      } else if (pivot > target) {
        right = pivot - 1;
      } else {
        return nums[pivot];
      }
    }
    // 取基准点方法
    function partition(nums, left, right) {
      let i = left + 1;
      let j = right;
      // 随机取基准点
      // 先将基准点与left交换, 后面正常执行
      if (right > left) {
        let random = left + 1 + (((right - left) * Math.random()) >> 0);
        // 和left交换
        [nums[left], nums[random]] = [nums[random], nums[left]];
      }
      let pivot = nums[left];
      // 简单交换, 将小于pivot的元素交换到前面
      while (true) {
        // 不停移动i直到nums[i]>基准点
        while (nums[i] <= pivot && i < right) {
          i++;
        }
        // 不停移动j直到nums[j]<基准点
        while (nums[j] >= pivot && j > left) {
          j--;
        }
        // 越界
        if (i >= j) break;
        // 交换
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      // 交换初始值
      [nums[left], nums[j]] = [nums[j], nums[left]];
      return j;
    }
  }
  // 辅助方法-堆排序
  function hs(nums, k) {
    // 构造大顶堆
    // 从第一个非叶子节点开始, 依次调整节点
    for (let i = (nums.length >> 1) - 1; i >= 0; i--) {
      adjustHeap(nums, i, nums.length);
    }
    // 从后往前, 不断的执行[交换+调整]操作
    for (let i = nums.length - 1; i >= 0; i--) {
      // 交换堆顶、堆尾元素
      [nums[0], nums[i]] = [nums[i], nums[0]];
      adjustHeap(nums, 0, i);
    }
    return nums[nums.length - k];

    // 内部方法
    function adjustHeap(nums, parent, length) {
      // 暂存父元素
      let temp = nums[parent];
      for (let i = 2 * parent + 1; i < length; i = i * 2 + 1) {
        // 选取比较大的孩子
        if (i + 1 < length && nums[i + 1] > nums[i]) {
          i++;
        }
        // 和父元素进行比较
        if (nums[i] > temp) {
          // 比父元素大, 需要交换, 但此处不交换
          nums[parent] = nums[i];
          parent = i;
        } else {
          break;
        }
      }
      // 放置父元素
      nums[parent] = temp;
    }
  }
  // 辅助方法-暴力排序
  function vi(nums, k) {
    return nums.sort((a, b) => a - b)[nums.length - k];
  }
};
// @lc code=end

// test
if (describe) {
  describe('215.数组中的第k个最大元素.js', () => {
    it('示例01', () => {
      let ans = findKthLargest([3, 2, 1, 5, 6, 4], 2);
      expect(ans).toBe(5);
    });
    it('示例02', () => {
      let ans = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
      expect(ans).toBe(4);
    });
  });
}
