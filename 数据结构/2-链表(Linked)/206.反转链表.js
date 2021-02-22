/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 定义根节点进行拼接
  let hair = new ListNode(0);
  // 前一个节点+当前节点
  let prev = null;
  let curr = head;
  while (curr) {
    // 记录下一节点
    let next = curr.next;
    // 将当前节点放到根节点上
    hair.next = curr;
    // 将前一节点拼接到当前节点上
    curr.next = prev;
    // 前一节点右移
    prev = curr;
    // 当前节点右移
    curr = next;
  }
  return hair.next;
};
// @lc code=end
