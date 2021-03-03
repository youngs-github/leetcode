/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    // 回溯
    return backtrack(s, wordDict);

    // 辅助方法
    function backtrack(s, words) {
        // 记忆化递归优化
        return dfs(s, 0, new Map(), new Set(words)).map((ss) => ss.join(' '));

        // dfs
        function dfs(s, start, memo, words) {
            // 缓存
            if (memo.has(start)) {
                return memo.get(start);
            }
            // 完成
            if (start >= s.length) {
                return [[]];
            }
            // 遍历
            let cache = [];
            for (let i = start + 1; i <= s.length; i++) {
                let word = s.slice(start, i);
                if (words.has(word)) {
                    // 递归
                    let rest = dfs(s, i, memo, words);
                    // 拼装
                    for (let j = 0; j < rest.length; j++) {
                        cache.push([word].concat(rest[j]));
                    }
                }
            }
            // 缓存
            memo.set(start, cache);
            return cache;
        }
    }
};
// @lc code=end

// test
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));
console.log(wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']));
