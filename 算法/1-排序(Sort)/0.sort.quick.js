/**
 * 简单编写快速排序算法
 * 以前写的，有错，后续再改
 */

// 原始数组
const array = new Array(20).fill(0).map(() => {
  return Math.round(Math.random() * 10000);
});

// 比较方法
function partition(arr, low, high) {
  let k = arr[low];
  while (low < high) {
    // 从右往左比较
    while (low < high && arr[high] >= k) {
      high--;
    }
    // 交换
    arr[low] = arr[high];
    // 从左往右比较
    while (low < high && arr[low] <= k) {
      low++;
    }
    // 交换
    arr[high] = arr[low];
  }
  arr[low] = k;
  return low;
}

// 优化版
function partition3(arr, low, high) {
  let k = (low + high) / 2;
  if (arr[low] > arr[high]) {
    [arr[low], arr[high]] = [arr[high], arr[low]];
  }
  if (arr[k] > arr[high]) {
    [arr[k], arr[high]] = [arr[high], arr[k]];
  }
  if (arr[k] > arr[low]) {
    [arr[k], arr[low]] = [arr[low], arr[k]];
  }

  k = arr[low];
  while (low < high) {
    // 从右往左比较
    while (low < high && arr[high] >= k) {
      high--;
    }
    // 交换
    arr[low] = arr[high];
    // 从左往右比较
    while (low < high && arr[low] <= k) {
      low++;
    }
    // 交换
    arr[high] = arr[low];
  }
  arr[low] = k;
  return low;
}

// 排序方法
function quickSort(arr, low, high) {
  if (low < high) {
    const point = partition(arr, low, high);
    quickSort(arr, low, point - 1);
    quickSort(arr, point + 1, high);
  }
}

quickSort(array, 0, array.length - 1);

console.error(array);
