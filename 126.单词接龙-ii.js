/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    // 回溯
    return bt(beginWord, endWord, wordList);

    // 辅助方法-回溯
    function bt(begin, end, words) {
        let ans = [];
        let min = Number.MAX_SAFE_INTEGER;
        inner(begin, [begin]);
        return ans.filter((arr) => arr.length === min);
        // 递归
        function inner(begin, stack) {
            // 超长
            if (stack.length >= min) return;
            // 循环
            for (let i = 0; i < words.length; i++) {
                // 匹配, 且未访问过
                if (match(begin, words[i]) && !stack.includes(words[i])) {
                    if (words[i] === end) {
                        // 最后一轮
                        ans.push([...stack, end]);
                        min = Math.min(min, stack.length + 1);
                    } else {
                        // 继续递归
                        stack.push(words[i]);
                        inner(words[i], stack);
                        stack.pop();
                    }
                }
            }
        }
        // 匹配
        function match(s, t) {
            // 找出相差1个字符的单词
            if (s === t) return false;
            let c = 0;
            for (let i = 0; i < s.length; i++) {
                if (s[i] !== t[i]) {
                    c++;
                }
            }
            return c === 1;
        }
    }
};
// @lc code=end

// @test
if (describe) {
    describe('126.单词接龙-ii.js', () => {
        // it('示例01', () => {
        //     let ans = findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']);
        //     expect(ans.length).toBe(0);
        // });
        // it('示例02', () => {
        //     let ans = findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
        //     expect(ans.length).toBe(2);
        // });
        it('示例03', () => {
            let ans = findLadders('qa', 'sq', [
                'si',
                'go',
                'se',
                'cm',
                'so',
                'ph',
                'mt',
                'db',

                'pt',
                'io',
                'be',
                'fm',
                'ta',
                'tb',
                'ni',
                'mr',
                'pa',
                'he',
                'lr',
                'sq',
                'ye'
            ]);
            expect(ans.length).toBe(2);
        });
    });
}
