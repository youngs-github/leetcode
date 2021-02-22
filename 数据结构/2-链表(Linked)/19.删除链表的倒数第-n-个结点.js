/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 可能会删除头结点
  // 所以要用新的头代替
  let hair = new ListNode(0, head);
  // 双指针
  // 快指针先行n次
  let fast = hair;
  let slow = hair;
  while (n-- > 0) {
    fast = fast.next;
  }
  // 快慢指针一同走
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // 删除节点
  // 慢指针即为待删除节点前一节点
  let del = slow.next;
  slow.next = del ? del.next : null;
  return hair.next;
};
// @lc code=end
