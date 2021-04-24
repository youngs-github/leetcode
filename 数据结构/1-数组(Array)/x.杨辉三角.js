/**
 * 打印杨辉三角
 */
var print = function (n) {
  // 构造n*n数组, 后期可以优化成n
  const nums = new Array(n).fill(1).map(() => new Array(n).fill(1));
  for (let i = 0; i < n; i++) {
    let info = ''.padStart((n - i) * 3, ' ');
    for (let j = 0; j < i; j++) {
      if (j > 0 && j < i - 1) {
        nums[i][j] = nums[i - 1][j - 1] + nums[i - 1][j];
      }
      info += `${nums[i][j]}`.padEnd(6, ' ');
    }
    console.log(info);
    console.log();
  }
};

print(12);
