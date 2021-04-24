/**
 * 简单编写堆排序算法
 *
 * 理论基于完全二叉树
 * 先建立大顶堆或者小顶堆
 * 从下往上，从左往右进行排序
 * n个元素组成的完全二叉树，最大非叶子节点的数组下标表示为：n/2 - 1
 * 每个非叶子节点的左右子节点数组下标分别为：2*i 及 2*i + 1
 */

// 原始数组
const array = new Array(20).fill(0).map(() => {
  return Math.round(Math.random() * 10000);
});

// 调整堆结构
function adjuestHeap(arr, i, len) {
  // 目标元素
  let temp = arr[i];
  // 从i节点的左子节点开始（2*i + 1）
  for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
    // 如果左子节点小于又子节点，满足排序，下一个
    if (k + 1 < len && arr[k] < arr[k + 1]) {
      k++;
    }
    // 如果子节点数据大于父节点，则进行交换
    if (arr[k] > temp) {
      arr[i] = arr[k];
      i = k;
    } else {
      break;
    }
  }
  // 将调整后的节点值保存
  arr[i] = temp;
}

// 排序方法
function heapSort(arr) {
  // 从最后一个非叶子节点开始， 建立大顶堆
  for (let i = ((arr.length / 2) >> 0) - 1; i >= 0; i--) {
    adjuestHeap(arr, i, arr.length);
  }
  // 调整堆结构
  for (let j = arr.length - 1; j > 0; j--) {
    // 将堆顶元素与末尾元素交换
    [arr[0], arr[j]] = [arr[j], arr[0]];
    // 重新调整堆结构
    adjuestHeap(arr, 0, j);
  }
}

// 排序
heapSort(array);

console.error(array);
