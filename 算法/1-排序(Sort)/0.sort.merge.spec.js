/**
 * 归并排序算法
 * 原理：分治法, 将数组一分为二到最小单元进行按序合并
 * 时间复杂度：O(n*lgn)
 * 空间复杂度：O(n)
 */
function mergeSort(arr) {
  const copy = new Array(arr.length);
  inner(arr, 0, arr.length - 1, copy);
  return arr;

  // 辅助方法-递归
  function inner(arr, left, right, copy) {
    if (left < right) {
      let mid = (left + right) >> 1;
      inner(arr, left, mid, copy);
      inner(arr, mid + 1, right, copy);
      merge(arr, left, mid, right, copy);
    }
  }
  // 辅助方法-合并
  function merge(arr, left, mid, right, copy) {
    let i = left;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= right) {
      copy[k++] = arr[i] < arr[j] ? arr[i++] : arr[j++];
    }
    while (i <= mid) {
      copy[k++] = arr[i++];
    }
    while (j <= right) {
      copy[k++] = arr[j++];
    }
    // 写入原数组
    while (k > 0) {
      arr[right--] = copy[--k];
    }
  }
}

// @test
if (describe) {
  describe('归并排序', () => {
    it('示例-01', () => {
      const arr = [1, 2, 3];
      const ans = mergeSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
    it('示例-02', () => {
      const arr = [2, 1, 3, 6, 4];
      const ans = mergeSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
    it('示例-03', () => {
      const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
      const ans = mergeSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
  });
}
