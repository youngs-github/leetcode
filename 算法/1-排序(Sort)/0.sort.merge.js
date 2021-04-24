/**
 * 简单编写归并排序算法
 *
 * 理论类似希尔排序的倒序版
 * 也类似快速排序分治法
 * 将数组依次分为n/2组、n/4组、n/8组等分别进行排序，最终获得2个单独数组，进行排序
 */

// 原始数组
const array = new Array(20).fill(0).map(() => {
  return Math.round(Math.random() * 10000);
});
const temp = new Array(array.length);

// 组合进行排序
function merging(arr, left, mid, right) {
  let i = left,
    j = mid + 1,
    k = 0;
  // 针对left-right区间的数
  while (i <= mid && j <= right) {
    // 从两部分一起循环，取其中最小的数先填入temp数组中
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  // 右侧比较小，此时数组左侧仍然还有数
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  // 左侧比较小，此时数组右侧仍然还有数
  while (j <= right) {
    temp[k++] = arr[j++];
  }
  k = 0;
  // 从left开始，将排好序的temp内元素填入arr原数组的left-right区间内
  while (left <= right) {
    arr[left++] = temp[k++];
  }
}

// 排序方法
function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    // 递归方法，将数组分为左右两部分
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    // 组合
    merging(arr, left, mid, right);
  }
}

console.error(`排序前：${array}`);
// 排序
mergeSort(array, 0, array.length - 1);

console.error(`排序后：${array}`);
