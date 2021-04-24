/**
 * 简单编写希尔排序算法
 */

// 原始数组
const array = new Array(20).fill(0).map(() => {
  return Math.round(Math.random() * 10000);
});
// const array = [9,8,7,6,5,4,3,2,1,0];

// 排序方法
function shellSort(arr) {
  /**
   * gap：间距
   * 根据模型，每次循环值都是上一次的一半
   * 将数组依次分为2份、4份、8份等分别进行排序
   */
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < arr.length; i++) {
      for (let j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
        [arr[j], arr[j + gap]] = [arr[j + gap], arr[j]];
      }
    }
  }
}

shellSort(array);

console.error(array);
