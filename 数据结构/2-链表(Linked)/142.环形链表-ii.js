/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function (head) {
  return hash(head);
  // 哈希表方法
  function hash(head) {
    let set = new Set();
    while (head) {
      if (set.has(head)) {
        return head;
      }
      set.add(head);
      head = head.next;
    }
    return null;
  }
  // 快慢指针
  function next(head) {
    // 慢：3->2->0->-4
    // 快：3->0->2->-4
    // 快指针比慢指针每次多走一步
    // 环最长即是链表长度
    // 慢指针在走完之前(包含最后一步)必定遇上快指针
    // 还是不太明白最后相遇的起点
    let fast = head;
    let slow = head;
    while (fast) {
      fast = fast.next;
      if (!fast) return null;
      fast = fast.next;
      slow = slow.next;
      if (fast === slow) break;
    }
    fast = head;
    while (fast !== slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return fast;
  }
};
// @lc code=end
