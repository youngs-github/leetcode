/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 链表有环则使用快慢指针
  // 快指针每次比慢指针多走一步
  // 所以只要有环, 快指针必定会追上慢指针
  let fast = head;
  let slow = head;
  while (fast) {
    fast = fast.next;
    if (!fast) return false;
    fast = fast.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// @lc code=end
