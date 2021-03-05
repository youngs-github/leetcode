/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    // 单次
    return on(gas, cost);
    // 暴力
    // return vi(gas, cost);

    // 辅助方法-单次
    function on(gas, cost) {
        let i = 0;
        let len = gas.length;
        while (i < len) {
            let j = 0;
            let gs = 0;
            let cs = 0;
            while (j < len) {
                let k = (i + j) % len;
                gs += gas[k];
                cs += cost[k];
                if (gs < cs) break;
                j++;
            }
            if (j === len) {
                return i;
            } else {
                i += j + 1;
            }
        }
        return -1;
    }
    // 辅助方法-暴力
    function vi(gas, cost) {
        // 循环
        for (let i = 0; i < gas.length; i++) {
            // 先取足够走出去的油
            if (gas[i] < cost[i]) continue;
            let rest = gas[i] - cost[i];
            // 遍历
            for (let j = 0; j < gas.length; j++) {
                // 真实索引
                let k = (i + j + 1) % gas.length;
                rest += gas[k] - cost[k];
                if (rest < 0) break;
            }
            if (rest >= 0) {
                return i;
            }
        }
        return -1;
    }
};
// @lc code=end

// @test
if (describe) {
    describe('134.加油站.js', () => {
        it('示例01', () => {
            let ans = canCompleteCircuit([], []);
            expect(ans).toBe(-1);
        });
        it('示例02', () => {
            let ans = canCompleteCircuit([1], [2]);
            expect(ans).toBe(-1);
        });
        it('示例03', () => {
            let ans = canCompleteCircuit([2], [2]);
            expect(ans).toBe(0);
        });
        it('示例04', () => {
            let ans = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
            expect(ans).toBe(-1);
        });
        it('示例05', () => {
            let ans = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
            expect(ans).toBe(3);
        });
    });
}
