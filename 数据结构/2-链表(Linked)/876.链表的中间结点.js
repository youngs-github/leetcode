/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 链表相关大部分都是双指针
  let fast = head;
  let slow = head;
  // 取到最后一个节点而非null节点
  while (fast && fast.next) {
    fast = fast.next;
    if (!fast) break;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
// @lc code=end
