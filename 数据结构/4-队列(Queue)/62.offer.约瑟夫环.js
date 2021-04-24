// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  // 1、n个人围成一圈, n>1
  // 2、指定一个数字m, m>2
  // 3、从第一个人开始报数, 报到n的人出局, 下一个人从头开始, 最后一个人是赢家
  // return r_queue(n, m);
  // return r_recur(n, m);
  return r_math(n, m);

  // 用数组模拟队列实现-超时
  function r_queue(n, m) {
    const queue = new Array(n).fill(0).map((v, i) => i);
    // 外层循环
    let i = 0;
    while (queue.length > 1 && ++i) {
      // 将头部出队
      let head = queue.shift();
      if (i % m !== 0) {
        // 添加到尾部
        queue.push(head);
      } else {
        // 出局
        i = 0;
      }
    }
    return queue[0];
  }
  // 用递归实现
  function r_recur(n, m) {
    if (n === 1) {
      return 0;
    }
    const x = r_recur(n - 1, m);
    return (m + x) % n;
  }
  // 用数学法实现
  function r_math(n, m) {
    let f = 0;
    for (let i = 2; i !== n + 1; i++) {
      f = (m + f) % i;
    }
    return f;
  }
};

// test
if (describe) {
  describe('62.offer.约瑟夫环.js', () => {
    it('示例01', () => {
      let ans = lastRemaining(5, 3);
      expect(ans).toBe(3);
    });
    it('示例02', () => {
      let ans = lastRemaining(50, 6);
      expect(ans).toBe(44);
    });
    it('示例03', () => {
      let ans = lastRemaining(10, 17);
      expect(ans).toBe(2);
    });
  });
}
