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
  // 快排
  // return quickSort(nums, k);
  // 堆排
  // return heapSort(nums, k);
  // // 归并
  return mergeSort(nums, k);

  function quickSort(nums, k) {
    inner(nums, 0, nums.length - 1);
    return nums[k - 1];

    function inner(nums, left, right) {
      if (left < right) {
        const p = partition(nums, left, right);
        inner(nums, left, p - 1);
        inner(nums, p + 1, right);
      }
    }
    function partition(nums, left, right) {
      let pivot = nums[right];
      while (left < right) {
        // 寻找左侧第一个小于基准的数
        while (left < right && nums[left] >= pivot) left++;
        nums[right] = nums[left];
        // 寻找右侧第一个大于基准的数
        while (left < right && nums[right] <= pivot) right--;
        nums[left] = nums[right];
      }
      nums[left] = pivot;
      return left;
    }
  }
  function heapSort(nums, k) {
    // 大顶堆
    buildHeap(nums);
    for (let i = nums.length - 1; i > 0; i--) {
      [nums[0], nums[i]] = [nums[i], nums[0]];
      adjustHeap(nums, 0, i);
    }
    return nums[nums.length - k];

    function buildHeap(nums) {
      for (let i = ((nums.length / 2) >> 0) - 1; i >= 0; i--) {
        adjustHeap(nums, i, nums.length);
      }
    }
    function adjustHeap(nums, parent, len) {
      let tmp = nums[parent];
      for (let i = parent * 2 + 1; i < len; i = i * 2 + 1) {
        if (i + 1 < len && nums[i] < nums[i + 1]) {
          i++;
        }
        if (nums[i] > tmp) {
          nums[parent] = nums[i];
          parent = i;
        } else {
          break;
        }
      }
      nums[parent] = tmp;
    }
  }
  function mergeSort(nums, k) {
    inner(nums, 0, nums.length - 1, new Array(nums.length));
    return nums[k - 1];

    function inner(nums, left, right, temp) {
      if (left < right) {
        const mid = (left + right) >> 1;
        inner(nums, left, mid, temp);
        inner(nums, mid + 1, right, temp);
        merge(nums, left, mid, right, temp);
      }
    }
    function merge(nums, left, mid, right, temp) {
      let i = left;
      let j = mid + 1;
      let k = 0;
      while (i <= mid && j <= right) {
        temp[k++] = nums[i] > nums[j] ? nums[i++] : nums[j++];
      }
      while (i <= mid) {
        temp[k++] = nums[i++];
      }
      while (j <= right) {
        temp[k++] = nums[j++];
      }
      while (k > 0) {
        nums[right--] = temp[--k];
      }
    }
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
