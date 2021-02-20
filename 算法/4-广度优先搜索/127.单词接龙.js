/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const ans = [Number.MAX_SAFE_INTEGER];
    // 使用Set处理
    let set = new Set(wordList);
    search(beginWord, endWord, set, 0);
    return ans[0] === Number.MAX_SAFE_INTEGER ? 0 : ans[0] + 1;
    // 逐个单词查找
    function search(beginWord, endWord, words, index) {
        // 移除
        words.delete(beginWord);
        for (let i = 0; i < beginWord.length; i++) {
            for (let j = 0; j < 26; j++) {
                let word =
                    beginWord.slice(0, i) + String.fromCharCode(97 + j) + beginWord.slice(i + 1);
                if (word !== beginWord && words.has(word)) {
                    // 完成
                    if (word === endWord) {
                        ans[0] = Math.min(ans[0], index + 1);
                        return;
                    }
                    // 移除
                    words.delete(word);
                    // 找到，继续递归
                    search(word, endWord, words, index + 1);
					// 递归完成
					words.add(word);
                }
            }
        }
    }
};
// @lc code=end
