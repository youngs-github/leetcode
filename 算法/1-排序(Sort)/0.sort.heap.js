/**
 * 堆排序算法
 * 原理：基于完全二叉树结构（任意节点的值不小于其左右孩子的值：2n+1、2n+2, 下标从0开始）
 * 时间复杂度：O(n*lgn)
 * 空间复杂度：O(1)
 */
function heapSort(arr) {
  // 先建立堆
  buildHeap(arr);
  // 逐个替换调整
  for (let i = arr.length - 1; i > 0; i--) {
    // 交换头和尾
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 调整堆结构
    adjustHeap(arr, 0, i);
  }
  return arr;

  // 辅助方法-构建堆
  function buildHeap(arr) {
    // 构建堆过程只能确定堆顶元素, 并不能确定其他元素序列
    for (let i = ((arr.length / 2) >> 0) - 1; i >= 0; i--) {
      adjustHeap(arr, i, arr.length);
    }
  }
  // 辅助方法-调整堆
  function adjustHeap(arr, parent, len) {
    let tmp = arr[parent];
    // 遍历子孙元素
    for (let i = parent * 2 + 1; i < len; i = i * 2 + 1) {
      // 寻找子节点中的较大者
      if (i + 1 < len && arr[i] < arr[i + 1]) {
        i++;
      }
      // 如果子节点值比父节点大, 则交换, 并进行下一轮遍历
      if (arr[i] > tmp) {
        arr[parent] = arr[i];
        // i即为下一轮遍历的父节点
        parent = i;
      } else {
        break;
      }
    }
    // 保存调整后的值
    arr[parent] = tmp;
  }
}

// @test
if (describe) {
  describe('堆排序', () => {
    it('示例-01', () => {
      const arr = [1, 2, 3];
      const ans = heapSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
    it('示例-02', () => {
      const arr = [2, 1, 3, 6, 4];
      const ans = heapSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
    it('示例-03', () => {
      const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
      const ans = heapSort([...arr]);
      expect(ans.join()).toBe(arr.sort((a, b) => a - b).join());
    });
  });
}
