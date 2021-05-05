/**
 * 快速排序算法
 * 原理：分治法, 从中选出一个基点, 将剩余数据放置于其左右两侧
 * 时间复杂度：O(n*lgn)~O(n^2)
 * 空间复杂度：O(lgn)~O(n)
 */
function quickSort(arr) {
  inner(arr, 0, arr.length - 1);
  return arr;

  // 辅助方法
  function inner(arr, left, right) {
    if (left < right) {
      const mid = partition(arr, left, right);
      inner(arr, left, mid - 1);
      inner(arr, mid + 1, right);
    }
  }

  // 排序方法
  function partition(arr, left, right) {
    // 默认以最后一个元素为基点
    // 优化：选取随机元素并将其放置于头部
    let pivot = arr[right];
    while (left < right) {
      // 双指针聚拢
      // 先选择开始元素时, pivot已经存储, 故可以将arr[left]进行赋值, 若先将arr[right]进行赋值则导致值重复
      while (left < right && arr[left] <= pivot) left++;
      // 将当前left位置值(大于基准)放置于右侧
      arr[right] = arr[left];
      while (left < right && arr[right] >= pivot) right--;
      // 将当前right位置值(小于基准)放置于左侧
      arr[left] = arr[right];
    }
    // 放置基点
    arr[left] = pivot;
    // left与right相遇, 随便选择
    return left;
  }
}

// @test
if (describe) {
  describe('快速排序', () => {
    it('示例-01', () => {
      const arr = [1, 2, 3];
      const ans = quickSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
    it('示例-02', () => {
      const arr = [2, 1, 3, 6, 4];
      const ans = quickSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
    it('示例-03', () => {
      const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
      const ans = quickSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
  });
}
