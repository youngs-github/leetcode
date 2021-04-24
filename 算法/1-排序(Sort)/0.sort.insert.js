/**
 * 简单编写快速排序算法
 */

// 原始数组
// const array = new Array(20).fill(0).map(() => {
//     return Math.round(Math.random() * 10000);
// });
const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// 排序方法
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      // 第i位比较小，则将其拿出来
      let temp = arr[i];
      // 从第i位开始往前，将数组后移，查找可以放temp的地方
      for (let j = i; j >= 0; j--) {
        if (j > 0 && arr[j - 1] > temp) {
          // 找到合适的j-1位置，此时j-1位置元素<=temp，故将temp放于此处
          arr[j] = arr[j - 1];
        } else {
          // 不满足情况
          arr[j] = temp;
          break;
        }
      }
      console.error(arr);
    }
  }
}

insertSort(array);

console.error(array);
